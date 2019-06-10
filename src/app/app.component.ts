import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router,
              private http: HttpClient) { }


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
    // alert(value);
    alert(this.http.get("http://127.0.0.1:8080/api/animais/" + value).toPromise());
  }
}
