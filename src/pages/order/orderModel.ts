export class Order{
  id : any;
  company: any;
	employee: any;
	products: Array<{p_id : any, name:string, quantity: number}> = [];
	order_date: string ;
  delivery_date: string;
  status: boolean = true;
}
