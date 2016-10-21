import { Component } from '@angular/core';
import { MakeOrderPage } from './makeOrder';
import { ViewOrderPage } from './viewOrder';

@Component({
  templateUrl: 'order.html'
})
export class OrderPage {
  tabOne: any;
  tabTwo: any;
  constructor() {
    this.tabOne = MakeOrderPage;
    this.tabTwo = ViewOrderPage;
  }
}
