import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ForgotPasswordPage } from '../pages/forgotPassword/forgotPassword';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgotPasswordPage
  ],
  providers: []
})
export class AppModule {}
