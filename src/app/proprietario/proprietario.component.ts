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

  private readonly API = 'http://127.0.0.1:8080/api/proprietario/';

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

  ngOnInit() {
    this.loadData();
   }

  async loadData() {
    this.proprietario = (await this.http.get(this.API).toPromise()) as any;
    this.dataSource.data = this.proprietario;
  }

   adicionar() {
    this.router.navigate(['proprietario/adicionar']);
    this.loadData();
  }

  // Atualizando as informações
  async updateData(id: string) {
    this.router.navigate(['proprietario/atualizar', id]);
  }

  // Exclindo o proprietário
  async deleteData(id: string) {
    this.http.delete(this.API + id).toPromise();
    alert('Proprietário excluído com sucesso!');
    this.loadData();
  }

  // Relatório
  report() {
    window.open(this.API + '/report/relatorio', "_blank");
  }
}
