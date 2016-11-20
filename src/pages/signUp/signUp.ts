import { Component } from '@angular/core';
import { OrderPage } from '../../pages/order/order';
import {IonicApp, Nav} from 'ionic-angular';
import { UserData } from '../../providers/user-data2';
import { ListItService } from '../../providers/listit-service';
import { ToastService } from '../../providers/toast-service';

@Component({
    templateUrl: 'signUp.html',
    providers: [ListItService,ToastService]
})
export class SignUpPage {
    signUp: { username?: string, password?: string, confirmPassword?: string } = {};
    submitted = false;
    passwordMissmatch = false;
    constructor(public navCtrl: Nav,
        public userData: UserData,
        private listitService: ListItService,
        private toastService: ToastService,
    ) { }

    onSignUp(form) {
        if (this.isValidFormData(form)) {
            this.listitService.getTokenForSignUp(this.getFormSubmissionData())
                .then(
                (data: any) => {
                    let response = data;
                    if (response.error == null)
                        this.storeToken(response.token);
                    else
                        this.notifyError(response.error);
                }
                );

        }
    }

    getFormSubmissionData() {
        return { email: this.signUp.username, password: this.signUp.password };
    }

    isValidFormData(form) {
        this.submitted = true;
        this.passwordMissmatch = (this.signUp.password !== this.signUp.confirmPassword)
            && this.signUp.password !== undefined
            && this.signUp.confirmPassword !== undefined;
        return form.valid && !this.passwordMissmatch;
    }

    storeToken(token) {
        this.userData.login(token).then(
            () => this.navCtrl.push(OrderPage),
            (e) => this.notifyError("Unable store token!")
        );
    }

    notifyError(msg) {
        this.toastService.showToast(msg);
    }
}
