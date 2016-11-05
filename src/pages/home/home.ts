import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { SignUpPage } from '../../pages/signUp/signUp';
@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private navCtrl:Nav) {

  }
  navigateLogin(){
    this.navCtrl.push(LoginPage);
  }
  navigateSignup(){
    this.navCtrl.push(SignUpPage);
  }
}
