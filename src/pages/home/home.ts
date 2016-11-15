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
  response: any;
  constructor(private navCtrl:Nav, private userData: UserData) {
    this.userData.hasLoggedIn()
                .then((data) => {
                  console.log(data);
                  this.response = data;
                  if(this.response.error == null && this.response.isLoggedIn === true)
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
