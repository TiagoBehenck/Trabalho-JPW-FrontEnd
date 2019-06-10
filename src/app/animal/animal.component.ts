import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'nome', 'raca', 'idade', 'dataNascimento', 'acao', 'adicionar'];
  dataSource = new MatTableDataSource<any>([]);

  fileUrl;

  public animal: Array<{
    _id: string;
    nome: string;
    raca: string;
    idade: number;
    dataNascimento: string;
  }> = [];

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.loadData();
  }

  // Adicionando um novo animal
  adicionar() {
    this.router.navigate(['adicionar']);
    this.loadData();
  }

  // Carregar os dados
  async loadData() {
    this.animal = (await this.http.get("http://127.0.0.1:8080/api/animais").toPromise()) as any;
    this.dataSource.data = this.animal;
  }

  // Atualizando as informaçãoes
  async updateData(id: string) {
    // RelativeTo rota relativa a qual URL, rota ativa no momento
    this.router.navigate(['atualizar', id], { relativeTo: this.route});
  }

  // Excluindo
  async deleteData(id: string) {
    this.http.delete("http://127.0.0.1:8080/api/animais/" + id).toPromise();
    alert('Animal excluído com sucesso!');
    this.loadData();
  }

  ngOnInit() { }

  report() {
    alert('Vai baixar!');
  }

}
