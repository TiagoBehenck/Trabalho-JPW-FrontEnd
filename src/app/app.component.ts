import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

export interface PeriodicElement {
  id: string;
  name: string;
  raca: string;
  age: number;
  dataNascimento: string;
  action: any;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { id: '1', name: 'Hydrogen', raca: 'Spitz', age: 1, dataNascimento: '12-02-2012', action: 'a' },
  { id: '2', name: 'Helium',   raca: 'Spitz', age: 1, dataNascimento: 'Date', action: 'b' },
  { id: '3', name: 'Lithium',  raca: 'Spitz', age: 1, dataNascimento: 'Date', action: 'c'}, ];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router) { }

  displayedColumns: string[] = ['id', 'name', 'raca', 'age', 'dataNascimento', 'action'];
  dataSource = ELEMENT_DATA;

  labelTitle = [
    'Animal',
    'Proprietário',
    'Adicionar'
  ];

  title = 'PetShop';

  length = 100;
  pageSize = 10;
  pageEvent: PageEvent;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  validatorName = new FormControl('', [Validators.required]);
  validatorRaca = new FormControl('', [Validators.required]);
  validatorAge = new FormControl('', [Validators.required]);
  validatorDateBirth = new FormControl('', [Validators.required]);

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  navigationTo(tab) {
    if (tab.index === 0) {
      this.router.navigate(['animal']);
    } else if (tab.index === 1) {
      this.router.navigate(['proprietario']);
    } else {
      this.router.navigate(['']);
    }
  }

  submitData() {
    // alert('Funciona!');
  }
}
