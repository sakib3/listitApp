import { Component } from '@angular/core';
import { OrderPage } from '../../pages/order/order';
import {IonicApp, Nav} from 'ionic-angular';
import { UserData } from '../../providers/user-data2';
@Component({
  templateUrl: 'signUp.html'
})
export class SignUpPage {
  signUp: {username?: string, password?: string, confirmPassword?: string} = {};
  submitted = false;
  passwordMissmatch = false;
 constructor(public navCtrl: Nav, public userData: UserData) { }

  onSignUp(form){
    this.submitted = true;
    this.passwordMissmatch = (this.signUp.password !== this.signUp.confirmPassword)
    && this.signUp.password !== undefined
    && this.signUp.confirmPassword !== undefined;
    if (form.valid && !this.passwordMissmatch) {
        this.userData.login(this.signUp.username).then(
          () => this.navCtrl.push(OrderPage),
          error => console.error('Error storing item', error)
        );

    }
  }
}
