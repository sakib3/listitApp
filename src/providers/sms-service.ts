import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SMS } from 'ionic-native';
import { Toast } from 'ionic-native';
@Injectable()

export class SmsService {
    constructor(private platform: Platform) { }
    send(number, message) {
        this.platform.ready().then(() => SMS.send(number, message));
    }
    sendToMany(senders: any,message : string) {
        this.platform.ready().then(
            () => senders.forEach(function(sender) {
                SMS.send(sender.phoneNumbers[0].value, message);
            })
        );
    }
}
