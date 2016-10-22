import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgotPassword/forgotPassword';
import { SignUpPage } from '../pages/signUp/signUp';
import { OrderPage } from '../pages/order/order';
import { MakeOrderPage } from '../pages/order/makeOrder';
import { ViewOrderPage } from '../pages/order/viewOrder';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage,
    SignUpPage,
    OrderPage,
    MakeOrderPage,
    ViewOrderPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage,
    SignUpPage,
    OrderPage,
    MakeOrderPage,
    ViewOrderPage
  ],
  providers: []
})
export class AppModule {}
