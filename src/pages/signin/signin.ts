import { Component } from '@angular/core';
import {LocalStorageService} from '../providers/local-storage-service';
import { Toast } from 'ionic-native';
import { OrderPage } from '../../pages/order/order';
import {IonicApp, Nav} from 'ionic-angular';
import { UserData } from '../../providers/user-data';
@Component({
  templateUrl: 'signin.html',
  providers: [UserData]
})
export class SignInPage {
  signin: {username?: string, password?: string} = {};
  submitted = false;

 constructor(public navCtrl: Nav, private userData: UserData) { }

 onSignIn(form) {
   //this.storeService.add(usercreds.email, usercreds.password)
    //   .then((response) => {}, ()=> {});
   this.submitted = true;
   if (form.valid) {
     this.userData.login(this.signin.username);
     this.navCtrl.push(OrderPage);
   }
 }

  forgotPassword(){

  }

}
