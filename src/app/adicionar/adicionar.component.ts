import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() { 
    this.form = this.fb.group({
        nome: ['', [Validators.required]],
        raca: ['', [Validators.required]],
        idade: ['', [Validators.required]],
        dataNascimento: ['', [Validators.required]]
    });
  }

  add() {
    console.log(this.form.value);
    if(this.form.valid){
      alert('Animal adicionado com sucesso!');
      this.router.navigate(['animal']);
    }
  }

  update() {
    alert('Animal adicionado com sucesso!');
  }

  cancel() {
    this.router.navigate(['animal']);
  }
}
