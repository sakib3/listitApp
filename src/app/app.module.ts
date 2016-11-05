import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/signin/signin';
import { ForgotPasswordPage } from '../pages/forgotPassword/forgotPassword';
import { SignUpPage } from '../pages/signUp/signUp';
import { OrderPage } from '../pages/order/order';
import { MakeOrderPage } from '../pages/order/makeOrder';
import { ViewOrderPage } from '../pages/order/viewOrder';
import { OrderDetailPage } from '../pages/order/order-detail';
import { Storage } from '@ionic/storage';
import { UserData } from '../providers/user-data';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignInPage,
    ForgotPasswordPage,
    SignUpPage,
    OrderPage,
    MakeOrderPage,
    ViewOrderPage,
    OrderDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignInPage,
    ForgotPasswordPage,
    SignUpPage,
    OrderPage,
    MakeOrderPage,
    ViewOrderPage,
    OrderDetailPage
  ],
  providers: [UserData, Storage]
})
export class AppModule {}
