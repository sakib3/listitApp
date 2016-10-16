import { Component } from '@angular/core';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  usercreds: {email: string, password: string};
  constructor() {
    this.usercreds = {
        email: '',
        password: ''
    }
  }
  login(usercreds) {
    console.log('login req', usercreds);
  }
}
