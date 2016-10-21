import { OnInit, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Company } from './companyModel';
import { CompanyService } from './companyService';

@Component({
  selector: 'page-makeOrder',
  templateUrl: 'makeOrder.html',
  providers: [CompanyService]
})
export class MakeOrderPage implements OnInit{
  companies: Company[];
  selectedCompany: Company;

  constructor(public navCtrl: NavController, private companyService: CompanyService) {
    //this.getCompanies();
    this.selectedCompany = new Company();
  }
  getCompanies(): void {
    //this.companies = this.companyService.getCompanies();
    this.companyService.getCompanies().then(companies => this.companies = companies);
  }
  ngOnInit(): void {
    console.info('On init!!!!')
    this.getCompanies();
  }
  companySelected(id) : void{
    if(id!==undefined) this.selectedCompany = this.companies.find(c=>c.id==id);
  }
}
