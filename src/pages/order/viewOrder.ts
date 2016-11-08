import { OnInit, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderService } from './orderService';
import { Order } from './orderModel';
import { ORDERS, ORDER } from './mock-orders';
import { OrderDetailPage } from './order-detail';
@Component({
  selector: 'page-viewOrder',
  templateUrl: 'viewOrder.html',
  providers: [OrderService]
})
export class ViewOrderPage implements OnInit{
  orders: Order[];
  constructor(public navCtrl: NavController,private orderService: OrderService) {
  }
  ngOnInit(): void {
    this.getOrders();
  }
  getOrders(): void {
    this.orderService.getOrders().then(orders => this.orders = orders);
  }
  detailsOrder(id): void{
    this.navCtrl.push(OrderDetailPage, {
      'id': id
    });
  }
  openNavDetailsPage(item) {
    //this.navCtrl.push(NavigationDetailsPage, { item: item });
  }
}
