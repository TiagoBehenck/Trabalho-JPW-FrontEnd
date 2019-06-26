import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-adicionarproprietario',
  templateUrl: './adicionarproprietario.component.html',
  styleUrls: ['./adicionarproprietario.component.css']
})
export class AdicionarproprietarioComponent implements OnInit {

  form: FormGroup;

  public proprietario: any = {};

  constructor(private router: Router,
              private http: HttpClient,
              private fb: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      async (params: any) => {
        const id = params['id'];
        console.log(id);
        this.proprietario = await (this.http.get("http://127.0.0.1:8080/api/proprietario/" + id ).toPromise()) as any;
        console.log(this.proprietario);
        this.updateForm(this.proprietario);
      }
    )

    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      end: ['', [Validators.required]],
      telefone: ['', [Validators.required]]
  });
  }

  add() {
    console.log(this.form.value);
    if (this.form.valid) {
    this.http.post("http://127.0.0.1:8080/api/proprietario", this.form.value).toPromise();
    console.log(this.form.value.end);
    // console.log(this.http.get("http://127.0.0.1:8080/api/cep/" + this.form.value.end).toPromise());
    this.http.get("http://127.0.0.1:8080/api/cep/" + this.form.value.end).toPromise();
    alert('Proprietário adicionado com sucesso!');
    this.router.navigate(['proprietario']);
    }
  }

  updateForm(proprietario) {
    this.form.patchValue({
      // id: animal._id,
      nome: proprietario.nome,
      cpf: proprietario.cpf,
      end: proprietario.end,
      telefone: proprietario.telefone
    });
  }

  cancel() {
    this.router.navigate(['proprietario']);
  }
}
