import { OnInit, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Company } from './companyModel';
import { Product } from './productModel';
import { CompanyService } from './companyService';
import { ProductService } from './productService';

@Component({
  selector: 'page-makeOrder',
  templateUrl: 'makeOrder.html',
  providers: [CompanyService, ProductService]
})
export class MakeOrderPage implements OnInit{
  companies: Company[];
  products: Product[];
  selectedCompany: Company;

  constructor(public navCtrl: NavController, private companyService: CompanyService, private productService: ProductService) {
    this.selectedCompany = new Company();
  }
  getCompanies(): void {
    this.companyService.getCompanies().then(companies => this.companies = companies);
  }
  getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  ngOnInit(): void {
    console.info('On init!!!!')
    this.getCompanies();
    this.getProducts();
  }
  companySelected(id) : void{
    if(id!==undefined) this.selectedCompany = this.companies.find(c=>c.id==id);
  }
  prodQuantityInc(id) : void{
    this.products = this.products.map((p)=>
                  {
                    if(p.id == id)
                      p.quantity++;
                    return p;
                  });
  }
  prodQuantityDsc(id) : void{
    this.products = this.products.map((p)=>
                  {
                    if(p.id == id && p.quantity > 0)
                      p.quantity--;
                    return p;
                  });
  }
  send() : void{

  }
}
