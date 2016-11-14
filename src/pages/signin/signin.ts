import { Component } from '@angular/core';
import {LocalStorageService} from '../providers/local-storage-service';
import { Toast } from 'ionic-native';
import { OrderPage } from '../../pages/order/order';
import { ForgotPasswordPage } from '../../pages/forgotPassword/forgotPassword';
import {IonicApp, Nav} from 'ionic-angular';
//import { UserData } from '../../providers/user-data';
import { UserData } from '../../providers/user-data2';
import { SignInService } from './signinService';
import {Platform} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
@Component({
    templateUrl: 'signin.html',
    providers: [UserData,SignInService]
})
export class SignInPage {
    signin: { username?: string, password?: string } = {};
    submitted = false;
    response: any ;
    constructor(public navCtrl: Nav, private userData: UserData, private signInData: SignInService, private platform: Platform) { }

    onSignIn(form) {
        this.submitted = true;
        if (form.valid) {
          this.signInData.getToken(this.getFormSubmissionData())
              .then(
                (data) => {
                  this.response = data;
                  if(this.response.error == null)
                    this.storeToken(this.response.token);
                  else
                    this.notifyError(this.response.error);
                }
            );

        }
    }

    onForgetPassword() {
        this.navCtrl.push(ForgotPasswordPage);
    }

    getFormSubmissionData(){
      return {email:this.signin.username, password: this.signin.password};
    }

    storeToken(token){
      this.userData.login(token).then(
        () => {
          Toast.show("Logged In!", 'short', 'top').subscribe(
            toast => {
              console.log('Success', toast);
            },
            error => {
              console.log('Error', error);
            },
            () => {
              console.log('Completed');
            }
          );
          this.navCtrl.push(OrderPage);
        },
        error => console.log(error)
      );
    }
    notifyError(msg){
      console.error(msg);
    }

}
