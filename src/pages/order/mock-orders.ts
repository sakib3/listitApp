import { Order } from './orderModel';

export const ORDER: Order =
  {id : '1', company: 'A', employee: 'B', products: [], order_date: '2016-10-23', delivery_date: '2016-10-23', status: true};

export const ORDERS: Order[] =
[
  {id : '1', company: 'Tieto AB', employee: 'B', products: [{p_id:1,name:'Alkaline',quantity:1}, {p_id:2,name:'Medel',quantity:10},{p_id:3,name:'Hand gloves',quantity:5}], order_date: '2016-10-22', delivery_date: '2016-10-23', status: true},
  {id : '2', company: 'Ericson AB', employee: 'D', products: [{p_id:1,name:'Alkaline',quantity:1}], order_date: '2016-10-23', delivery_date: '2016-10-23', status: true}
];
