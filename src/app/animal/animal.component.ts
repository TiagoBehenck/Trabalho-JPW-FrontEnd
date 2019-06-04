import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'nome', 'raca', 'idade', 'dataNascimento', 'acao'];
  dataSource = new MatTableDataSource<any>([]);

  public animal: Array<{
    _id: string;
    nome: string;
    raca: string;
    idade: number;
    dataNascimento: string;
  }> = [];

  constructor(public http: HttpClient) {
    this.loadData();
  }

  async loadData() {
    this.animal = (await this.http.get("http://127.0.0.1:8080/api/animais").toPromise()) as any;
    this.dataSource.data = this.animal;
    // console.log(this.animal);
  }

  ngOnInit() {
  }
}

