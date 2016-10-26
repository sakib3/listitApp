import { OnInit, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrderService } from './orderService';
import { Order } from './orderModel';
import { ORDERS, ORDER } from './mock-orders';
@Component({
  selector: 'page-detailOrder',
  templateUrl: 'order-detail.html',
  providers: [OrderService]
})
export class OrderDetailPage implements OnInit{
  id = this.params.get('id');
  order: Order;
  constructor(public navCtrl: NavController,private params: NavParams,private orderService: OrderService) {

  }
  ngOnInit(): void {
    console.info('On init!!!!')
    this.getOrder(this.id);
    console.log(this.order);
  }
  getOrder(id): void {
    this.orderService.getOrders().then(orders => this.order = orders.find(o=>o.id==id));

  }

}
