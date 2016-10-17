import { Component } from '@angular/core';

@Component({
  templateUrl: 'signUp.html'
})
export class SignUpPage {
  usercreds: {email: string, password: string, confirmPassword: string};
  logInAs: string;
  constructor() {
    this.usercreds = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    this.logInAs = "employee";
  }

  signUp(usercreds){
    console.log('login req', usercreds);
  }

}
