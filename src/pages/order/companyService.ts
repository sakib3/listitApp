import { Injectable } from '@angular/core';
import { Company } from './companyModel';
import { COMPANIES } from './mock-companies';


@Injectable()
export class CompanyService {
  getCompanies(): Promise<Company[]> {
    return Promise.resolve(COMPANIES);
  }
  getCompaniesSlowly(): Promise<Company[]> {
    return new Promise<Company[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getCompanies());
  }
}
