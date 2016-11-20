import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Toast } from 'ionic-native';
@Injectable()
export class ToastService {
    constructor(private platform: Platform) { }

    showToast(msg,position="top",duration="short") {
        this.platform.ready().then(
          () => {
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
        );
    }
}
