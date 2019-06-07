import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  validatorName = new FormControl('', [Validators.required]);
  validatorRaca = new FormControl('', [Validators.required]);
  validatorAge = new FormControl('', [Validators.required]);
  validatorDateBirth = new FormControl('', [Validators.required]);


  update() {
    alert('Atualizado com sucesso!');
    this.router.navigate(['animal']);
  }

  cancel() {
    this.router.navigate(['animal']);
  }
}

