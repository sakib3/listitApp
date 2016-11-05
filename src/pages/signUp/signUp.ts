import { Component } from '@angular/core';
import { OrderPage } from '../../pages/order/order';
import {IonicApp, Nav} from 'ionic-angular';
import { UserData } from '../../providers/user-data';
@Component({
  templateUrl: 'signUp.html'
})
export class SignUpPage {
  signin: {username?: string, password?: string, confirmPassword?: string} = {};
  submitted = false;
  passwordMissmatch = false;
 constructor(public navCtrl: Nav, public userData: UserData) { }

  onSignUp(form){
    console.log('login req', form);
    //this.storeService.add(usercreds.email, usercreds.password)
     //   .then((response) => {}, ()=> {});
    this.submitted = true;
    console.log(this.signin.password,' === '+this.signin.confirmPassword)
    this.passwordMissmatch = (this.signin.password !== this.signin.confirmPassword) && this.signin.password !== undefined && this.signin.confirmPassword !== undefined;
    if (form.valid && !this.passwordMissmatch) {

        this.userData.login(this.signin.username);
        this.navCtrl.push(OrderPage);

    }
  }
}
