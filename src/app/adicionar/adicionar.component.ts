import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  validatorName = new FormControl('', [Validators.required]);
  validatorRaca = new FormControl('', [Validators.required]);
  validatorAge = new FormControl('', [Validators.required]);
  validatorDateBirth = new FormControl('', [Validators.required]);

  add() {
    alert('Animal adicionado com sucesso!');
    this.router.navigate(['animal']);
  }

  update() {
    alert('Animal adicionado com sucesso!');
  }

  cancel() {
    this.router.navigate(['animal']);
  }
}
