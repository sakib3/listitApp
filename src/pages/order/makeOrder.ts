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
    //this.getCompanies();
    this.selectedCompany = new Company();
  }
  getCompanies(): void {
    //this.companies = this.companyService.getCompanies();
    this.companyService.getCompanies().then(companies => this.companies = companies);
  }
  getProducts(): void {
    //this.companies = this.companyService.getCompanies();
    this.productService.getProducts().then(products => this.products = products);
  }
  ngOnInit(): void {
    console.info('On init!!!!')
    this.getCompanies();
    this.getProducts();
    console.log(this.products);
  }
  companySelected(id) : void{
    if(id!==undefined) this.selectedCompany = this.companies.find(c=>c.id==id);
  }
}
