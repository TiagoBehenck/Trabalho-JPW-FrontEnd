import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proprietario',
  templateUrl: './proprietario.component.html',
  styleUrls: ['./proprietario.component.css']
})
export class ProprietarioComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'nome', 'cpf', 'end', 'telefone', 'acao', 'adicionar'];
  dataSource = new MatTableDataSource<any>([]);

  public proprietario: Array<{
    _id: string;
    nome: string;
    cpf: string;
    end: string;
    telefone: string;
  }> = [];


  constructor(public http: HttpClient,
              private router: Router) {
    this.loadData();
  }

  async loadData() {
    this.proprietario = (await this.http.get("http://127.0.0.1:8080/api/proprietario").toPromise()) as any;
    this.dataSource.data = this.proprietario;
  }

  ngOnInit() {  }

  adicionar() {
    this.router.navigate(['adicionar-proprietario']);
  }

  updateData(id: string) {

  }

  // Exclindo o proprietário
  async deleteData(id: string) {
    this.http.delete("http://127.0.0.1:8080/api/proprietario/" + id).toPromise();
    alert('Proprietário excluído com sucesso!');
    this.loadData();
  }

  report() {
    alert('Vai baixar!');
  }

}

