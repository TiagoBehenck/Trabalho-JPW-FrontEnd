import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  form: FormGroup;


  public animal: any = {};

  constructor(private router: Router,
              private http: HttpClient,
              private fb: FormBuilder,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id);
        this.animal = (this.http.get("http://127.0.0.1:8080/api/animais/" + id).toPromise()) as any;
        console.log(this.animal);
      }
    );

    this.form = this.fb.group({
        nome: ['', [Validators.required]],
        raca: ['', [Validators.required]],
        idade: ['', [Validators.required]],
        dataNascimento: ['', [Validators.required]]
    });
  }

  add() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.http.post("http://127.0.0.1:8080/api/animais", this.form.value).toPromise();
      alert('Animal adicionado com sucesso!');
      this.router.navigate(['animal']);
    }
  }

  cancel() {
    this.router.navigate(['animal']);
  }

  updateForm(animal) {
    this.form.patchValue({
      id: animal._id,
      nome: animal.nome,
      raca: ['', [Validators.required]],
      idade: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]]
    });
  }

}
