import { Injectable } from '@angular/core';
import { Order } from './orderModel';
import { ORDERS, ORDER } from './mock-orders';

@Injectable()
export class OrderService {
  getCompanies(): Promise<Order[]> {
    return Promise.resolve(ORDERS);
  }
  getCompaniesSlowly(): Promise<Order[]> {
    return new Promise<Order[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getCompanies());
  }
}
