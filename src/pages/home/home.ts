import { OnInit, Component } from '@angular/core';
import { Nav } from 'ionic-angular';
import { SignInPage } from '../../pages/signin/signin';
import { SignUpPage } from '../../pages/signUp/signUp';
import { UserData } from '../../providers/user-data2';
import { OrderPage } from '../../pages/order/order';

@Component({
  templateUrl: 'home.html',
  providers: [UserData]
})
export class HomePage {
  constructor(private navCtrl:Nav, private userData: UserData) {
    this.userData.hasLoggedIn()
                .then((isLoggedIn) => {
                  console.log(isLoggedIn);
                  if(isLoggedIn.error == null)
                    this.navigateOrder();
                }
    );
  }
  navigateSignIn(){
    this.navCtrl.push(SignInPage);
  }
  navigateSignUp(){
    this.navCtrl.push(SignUpPage);
  }
  navigateOrder(){
    this.navCtrl.push(OrderPage);
  }
}
