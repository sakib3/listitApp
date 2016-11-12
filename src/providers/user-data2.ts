import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import {Platform} from 'ionic-angular';
@Injectable()
export class UserData {
    _favorites = [];
    HAS_LOGGED_IN = 'hasLoggedIn';

    constructor(public events: Events, private platform: Platform) { }


    login(username) {
        return this.platform.ready().then(() => {
            return NativeStorage.setItem('HAS_LOGGED_IN', true)
                .then(
                () => {
                    console.log('HAS_LOGGED_IN');
                    //this.setUsername(username);
                    return NativeStorage.setItem('username', username)
                        .then(
                        () => {
                            console.log('username');
                            this.events.publish('user:login');
                            return true;
                        },
                        error => console.error('Error storing item', error)
                        );
                    //this.events.publish('user:login');
                },
                error => console.error('Error storing item', error)
                );

        });
    }

    signup(username) {
        NativeStorage.setItem('HAS_LOGGED_IN', true)
            .then(
            () => {
                console.log('HAS_LOGGED_IN');
                this.setUsername(username).then(
                    () => { this.events.publish('user:signup') }
                );

            },
            error => console.error('Error storing item', error)
            );
    }

    logout() {
        this.platform.ready().then(() => {
            NativeStorage.setItem('HAS_LOGGED_IN', false)
                .then(
                () => console.log('Stored item!'),
                error => console.error('Error storing item', error)
                );
            //this.storage.remove(this.HAS_LOGGED_IN);
            //this.storage.remove('username');
            this.events.publish('user:logout');
        });
    }

    setUsername(username) {
        //this.storage.set('username', username);
        return NativeStorage.setItem('username', username)
            .then(
            () => console.log('HAS_LOGGED_IN'),
            error => console.error('Error storing item', error)
            );
    }

    getUsername() {
        return NativeStorage.getItem('username')
            .then(username => { return username },
            error => console.error(error)
            );
        // return this.storage.get('username').then((value) => {
        //     return value;
        // });
    }

    // return a promise
    hasLoggedIn() {
        return this.platform.ready().then(() => {
            return NativeStorage.getItem('HAS_LOGGED_IN')
                .then(value => { return value === true },
                error => console.error(error)
                );
        },
            error => console.error(error)
        );
        // return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
        //     return value === true;
        // });
    }
}
