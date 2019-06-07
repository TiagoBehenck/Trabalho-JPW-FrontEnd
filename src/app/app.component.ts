import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router) { }


  labelTitle = [
    'Animal',
    'Proprietário',
  ];

  title = 'PetShop';

  navigationTo(tab) {
    if (tab.index === 0) {
      this.router.navigate(['animal']);
    } else {
      this.router.navigate(['proprietario']);
    }
  }

  onEnter(value: string) {
    alert(value);

  }

  submitData() {
    // alert('Funciona!');
  }
}
