import { Component } from '@angular/core';
import {LocalStorageService} from '../providers/local-storage-service';
import { Toast } from 'ionic-native';
import { OrderPage } from '../../pages/order/order';
import { ForgotPasswordPage } from '../../pages/forgotPassword/forgotPassword';
import {IonicApp, Nav} from 'ionic-angular';
//import { UserData } from '../../providers/user-data';
import { UserData } from '../../providers/user-data2';
import {Platform} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
@Component({
    templateUrl: 'signin.html',
    providers: [UserData]
})
export class SignInPage {
    signin: { username?: string, password?: string } = {};
    submitted = false;

    constructor(public navCtrl: Nav, private userData: UserData, private platform: Platform) { }

    onSignIn(form) {
        this.submitted = true;
        if (form.valid) {
                this.userData.login(this.signin.username).then(
                  () => this.navCtrl.push(OrderPage),
                  error => console.error('Error storing item', error)
                );
        }
    }

    onForgetPassword() {
        this.navCtrl.push(ForgotPasswordPage);
    }

}
