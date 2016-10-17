import { Component } from '@angular/core';

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {
  usercreds: {email: string, password: string};
  logInAs: string;
  constructor() {
    this.usercreds = {
        email: '',
        password: ''
    }
    this.logInAs = "employee";
  }
  login(usercreds) {
    console.log('login req', usercreds);
  }
  signUp(){

  }
  forgotPassword(){

  }

}
