import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  segment: string = "login";
  loading: any;
  formLogin: any = {
    name: '',
    password: '',
  };
  constructor() {}

}
