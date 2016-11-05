import { Component } from '@angular/core';
import {LocalStorageService} from '../providers/local-storage-service';
import { Toast } from 'ionic-native';
import { OrderPage } from '../../pages/order/order';
import {IonicApp, Nav} from 'ionic-angular';
import { UserData } from '../../providers/user-data';
@Component({
  templateUrl: 'login.html',
  providers: [UserData]
})
export class LoginPage {
  login: {username?: string, password?: string} = {};
  submitted = false;

 constructor(public navCtrl: Nav, public userData: UserData) { }

 onLogin(form) {
   //this.storeService.add(usercreds.email, usercreds.password)
    //   .then((response) => {}, ()=> {});
   this.submitted = true;
   console.log(this.login.username)
   if (form.valid) {
     this.userData.login(this.login.username);
     this.navCtrl.push(OrderPage);
   }
 }

 onSignup() {
   //this.navCtrl.push(SignupPage);
 }

  signUp(){

  }
  forgotPassword(){

  }

}
