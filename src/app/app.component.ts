import { Component, ViewChild } from '@angular/core';

import { Events, Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/signin/signin';
import { ForgotPasswordPage } from '../pages/forgotPassword/forgotPassword';
import { SignUpPage } from '../pages/signUp/signUp';
import { OrderPage } from '../pages/order/order';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public events: Events,
    //public storeService :LocalStorageService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      //{ title: 'Home', component: HomePage },
      //{ title: 'Login', component: SignInPage },
      //{ title: 'Forgot Password', component: ForgotPasswordPage },
      //{ title: 'SignUp', component: SignUpPage },
      { title: 'OrderPage', component: OrderPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      //this.storeService.get().then((data) => { console.log(data)});
    });
    this.listenToLoginEvents();
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  listenToLoginEvents() {
    this.events.subscribe('user:logout', () => {
      this.nav.push(HomePage);
    });
  }
}
