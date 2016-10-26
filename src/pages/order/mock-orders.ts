import { Order } from './orderModel';

export const ORDER: Order =
  {id : '1', company: 'A', employee: 'B', products: [], order_date: '2016-10-23', delivery_date: '2016-10-23', status: true};

export const ORDERS: Order[] =
[
  {id : '1', company: 'A', employee: 'B', products: [{p_id:1,name:'p1',quantity:1}, {p_id:2,name:'p2',quantity:10},{p_id:3,name:'p3',quantity:5}], order_date: '2016-10-22', delivery_date: '2016-10-23', status: true},
  {id : '2', company: 'C', employee: 'D', products: [], order_date: '2016-10-23', delivery_date: '2016-10-23', status: true}
];
