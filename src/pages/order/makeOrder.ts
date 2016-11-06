import { OnInit, Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Company } from './companyModel';
import { Product } from './productModel';
import { CompanyService } from './companyService';
import { ProductService } from './productService';
import { HomePage } from '../../pages/home/home';

@Component({
    selector: 'page-makeOrder',
    templateUrl: 'makeOrder.html',
    providers: [CompanyService, ProductService]
})
export class MakeOrderPage implements OnInit {
    companies: Company[];
    products: Product[];
    selectedCompany: Company;
    addProduct: any;
    testCheckboxOpen: boolean;
    testCheckboxResult: any;
    constructor(public navCtrl: NavController, private companyService: CompanyService, private productService: ProductService, private alertCtrl: AlertController) {
        this.selectedCompany = new Company();
        this.addProduct = {};
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
    companySelected(id): void {
        if (id !== undefined) this.selectedCompany = this.companies.find(c => c.id == id);
    }
    prodQuantityInc(id): void {
        this.products = this.products.map((p) => {
            if (p.id == id)
                p.quantity++;
            return p;
        });
    }
    prodQuantityDsc(id): void {
        this.products = this.products.map((p) => {
            if (p.id == id && p.quantity > 0)
                p.quantity--;
            return p;
        });
    }
    send(): void {

    }

    logout(): void {
        this.navCtrl.push(HomePage);
    }
    addNew(): void {
        if (this.addProduct.name !== undefined) {
            this.products.push({ id: new Date().getTime(), name: this.addProduct.name, family: 'Custom', quantity: 0 });
            this.addProduct = {};
        }
    }

    addReceivers() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Select receiver:');

        alert.addInput({
            type: 'checkbox',
            label: 'Mark Muller',
            value: 'value1',
            checked: true
        });

        alert.addInput({
            type: 'Jems Stuart',
            label: 'Bespin',
            value: 'value2'
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: data => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }
        });
        alert.present();
    }

    addReceiverEmail() {
        let alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'receiverEmail',
                    placeholder: 'Receiver Email'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: data => {
                        // if (User.isValid(data.username, data.password)) {
                        //   // logged in!
                        // } else {
                        //   // invalid login
                        //   return false;
                        // }
                    }
                }
            ]
        });
        alert.present();
    }

}
