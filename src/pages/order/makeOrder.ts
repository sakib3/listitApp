import { OnInit, Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Company } from './companyModel';
import { Product } from './productModel';
import { CompanyService } from './companyService';
import { ProductService } from './productService';
import { HomePage } from '../../pages/home/home';
import { UserData } from '../../providers/user-data2';
import { ContactService } from '../../providers/contacts';
import { ToastService } from '../../providers/toast-service';
import {Platform} from 'ionic-angular';
import { Contacts, Toast } from 'ionic-native';

@Component({
    selector: 'page-makeOrder',
    templateUrl: 'makeOrder.html',
    providers: [CompanyService, ProductService, ContactService, ToastService]
})
export class MakeOrderPage implements OnInit {
    companies: Company[];
    products: Product[];
    selectedWorkplace: any;
    addProduct: any;
    testCheckboxOpen: boolean;
    testCheckboxResult: any;
    contacts: any;
    receiverEmail: string;
    constructor(public navCtrl: NavController,
      private companyService: CompanyService,
      private productService: ProductService,
      private alertCtrl: AlertController,
      private userData: UserData,
      private platform: Platform,
      private contactService: ContactService,
      private toastService: ToastService,
      ) {
        //this.selectedCompany = new Company();
        this.addProduct = {};
        this.contacts=[];
        this.receiverEmail = null;
    }
    // getContacts(){
    //   // this.contactsService.getContacts().then((_contacts)=> {
    //   //   this.contacts = _contacts;
    //   // });
    //   // if(this.contacts.error != null)
    //   //   this.contacts = [];
    // }
    ngOnInit(): void {
        console.info('On init!!!!')
        this.getCompanies();
        this.getProducts();
    }
    send(): void {

    }

    logout(): void {
      this.userData.logout();
      // setTimeout(() => {
      //   this.navCtrl.push(HomePage);
      // },0);
    }
    getCompanies(): void {
        this.companyService.getCompanies().then(companies => this.companies = companies);
    }
    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
    }
    workplaceSelected(id): void {
        if (id !== undefined)
          console.log(id);
        //this.selectedWorkplace = this.companies.map(c => c.workplaces).map(w => w.w_id)this.companies.find(c => c.id == id);
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

    addNew(): void {
        if (this.addProduct.name !== undefined) {
            this.products.push({ id: new Date().getTime(), name: this.addProduct.name, family: 'Custom', quantity: 0 });
            this.addProduct = {};
        }
    }

    addReceivers() {
      this.contactService.getContacts()
      .then(
            (c:any)=> {
                    var isContactExist = 'displayName' in c && this.contacts.find((_c) => _c.id == c.id) ==null;
                    if(isContactExist)
                      this.contacts.push(c);
                    this.showAlert();
      });
    }

    // pickupContact(){
    //   this.platform.ready().then(
    //       () => {
    //           Contacts.pickContact().then(
    //               (c) => {
    //                       //this.showToast(JSON.stringify(c));
    //                       var isExist = this.contacts.find((_c) => _c.id == c.id);
    //                       if(isExist ==null )
    //                         this.contacts.push(c);
    //                       this.showAlert();
    //               },
    //               (e) => this.handleError('Unable to get contacts'));
    //
    //       },
    //       (e) => this.handleError('Platform is not ready')
    //
    //   );
    //
    // }
    addReceiverEmail() {
        let alert = this.alertCtrl.create({
            title: 'Receiver Email',
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
                      this.receiverEmail = this.isValidateEmail(data.receiverEmail) ? data.receiverEmail :null;
                    }
                }
            ]
        });
        alert.present();
    }

    isValidateEmail(email)
    {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    showAlert() {
      let alert = this.alertCtrl.create();
      alert.setTitle('Select receiver:');
      this.contacts.forEach(function(c){
        alert.addInput({
            type: 'checkbox',
            label: c.displayName || c.nickname,
            value: c.phoneNumbers.length > 0 ? c.phoneNumbers[0].value : 0,
            checked: true
        });
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

    handleError(msg, e = null) {
        this.notifyError(msg);
        return { error: msg };
    }

    notifyError(msg) {
        this.toastService.showToast(msg);
    }

    // showToast(msg,position="top",duration="short") {
    //     Toast.show(msg, duration, position).subscribe(
    //         toast => {
    //             console.log('Success', toast);
    //         },
    //         error => {
    //             console.log('Error', error);
    //         },
    //         () => {
    //             console.log('Completed');
    //         }
    //     );
    // }

}
