import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'nome', 'raca', 'idade', 'dataNascimento', 'acao', 'adicionar'];
  dataSource = new MatTableDataSource<any>([]);

  private readonly API = 'http://127.0.0.1:8080/api/animais/';

  public animal: Array<{
    _id: string;
    nome: string;
    raca: string;
    idade: number;
    dataNascimento: string;
  }> = [];

  constructor(private http: HttpClient,
              private router: Router) {  }

  ngOnInit() {
    this.loadData();
  }

  // Carregar os dados
  async loadData() {
    this.animal = (await this.http.get(this.API).toPromise()) as any;
    this.dataSource.data = this.animal;
  }

  // Adicionando um novo animal
  adicionar() {
    this.router.navigate(['animal/adicionar']);
    this.loadData();
  }

  // Atualizando as informaçãoes
  async updateData(id: string) {
    this.router.navigate(['animal/atualizar', id]);
  }

  // Excluindo o pet
  async deleteData(id: string) {
    this.http.delete(this.API + id).toPromise();
    alert('Animal excluído com sucesso!');
    this.loadData();
  }

  // Relatório
  report() {
    window.open(this.API + '/report/relatorio', "_blank");
  }
}
