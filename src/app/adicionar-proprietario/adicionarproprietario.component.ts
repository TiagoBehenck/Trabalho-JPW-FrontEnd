import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adicionarproprietario',
  templateUrl: './adicionarproprietario.component.html',
  styleUrls: ['./adicionarproprietario.component.css']
})
export class AdicionarproprietarioComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router,
              private http: HttpClient,
              private fb: FormBuilder,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {

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
    alert('Proprietário adicionado com sucesso!');
    this.router.navigate(['proprietario']);
    }
  }

  cancel() {
    this.router.navigate(['proprietario']);
  }
}
