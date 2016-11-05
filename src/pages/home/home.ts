import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';
import { SignInPage } from '../../pages/signin/signin';
import { SignUpPage } from '../../pages/signUp/signUp';
@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private navCtrl:Nav) {

  }
  navigateSignIn(){
    this.navCtrl.push(SignInPage);
  }
  navigateSignUp(){
    this.navCtrl.push(SignUpPage);
  }
}
