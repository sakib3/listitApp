import { Component } from '@angular/core';
import {LocalStorageService} from '../providers/local-storage-service';
import { Toast } from 'ionic-native';
import { OrderPage } from '../../pages/order/order';
import { ForgotPasswordPage } from '../../pages/forgotPassword/forgotPassword';
import {IonicApp, Nav} from 'ionic-angular';
import { UserData } from '../../providers/user-data2';
import { ListItService } from '../../providers/listit-service';
//import { SignInService } from './signinService';
import {Platform} from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
@Component({
    templateUrl: 'signin.html',
    providers: [UserData, ListItService]
})
export class SignInPage {
    signin: { username?: string, password?: string } = {};
    submitted = false;
    response: any;
    constructor(public navCtrl: Nav, private userData: UserData, private listitService: ListItService, private platform: Platform) { }

    onSignIn(form) {
        this.submitted = true;
        if (form.valid) {
            this.listitService.getTokenForSignIn(this.getFormSubmissionData())
                .then(
                (data) => {
                    this.response = data;
                    if (this.response.error == null)
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

    getFormSubmissionData() {
        return { email: this.signin.username, password: this.signin.password };
    }

    storeToken(token) {
        this.userData.login(token).then(
            () => this.navCtrl.push(OrderPage),
            (e) => this.notifyError("Unable store token!")
        );
    }
    notifyError(msg) {
        this.showToast(msg);
    }

    showToast(msg,position="top",duration="short") {
        Toast.show(msg, duration, position).subscribe(
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
    }

}
