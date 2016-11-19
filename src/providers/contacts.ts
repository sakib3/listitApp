import { Injectable } from '@angular/core';
import {Platform} from 'ionic-angular';
import { Contacts, Toast } from 'ionic-native';
@Injectable()
export class ContactService {
    constructor(private platform: Platform) { }
    getContacts() {
      return this.platform.ready().then(
          () => {
              return Contacts.pickContact().then(
                  (c) => c,
                  (e) => this.handleError('Unable to get contacts'));

          },
          (e) => this.handleError('Platform is not ready')

      );
    }


    handleError(msg, e = null) {
        this.notifyError(msg);
        //return { error: msg };
        return {};
    }

    notifyError(msg) {
        this.showToast(msg);
    }

    showToast(msg,position="top",duration="short") {
        Toast.show(msg, duration, position).subscribe(
            toast => {
                console.log('Success', toast);
            },
            error => {
                console.log('Error', error);
            },
            () => {
                console.log('Completed');
            }
        );
    }

}
