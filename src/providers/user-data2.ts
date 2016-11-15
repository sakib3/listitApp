import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
import {Platform} from 'ionic-angular';
@Injectable()
export class UserData {
    _favorites = [];
    HAS_LOGGED_IN = 'hasLoggedIn';

    constructor(public events: Events, private platform: Platform) { }


    login(token,publishEvent='user:login') {
        return this.platform.ready().then(
            () => {
                return this.setData('HAS_LOGGED_IN', true)
                    .then(
                      () => {
                          return this.setData('token', token)
                            .then(
                              () => {
                                  this.events.publish(publishEvent);
                                  return true;
                              },
                              (e) => e
                            );
                      },
                      (e) => e
                    );

            },
            (e) => this.handleError('Platform is not ready')

        );
    }

    signup(token) {
        return this.login(token,'user:signin');
    }

    logout() {
        this.platform.ready().then(
            () => {
              //NativeStorage.setItem('HAS_LOGGED_IN', false)
              this.setData('HAS_LOGGED_IN', false)
                .then(
                  (data) => {
                    this.events.publish('user:logout');
                    return data;
                  },
                  error => console.error('Error storing item', error)
                );
            },
            (e) => this.handleError('Platform is not ready')
        );
    }

    // return a promise
    hasLoggedIn() {
      return this.platform.ready().then(
          () => {
              return this.getData('HAS_LOGGED_IN')
                .then(
                  (data) => data
                );

          },
          (e) => this.handleError('Platform is not ready')
      );
        // return this.platform.ready().then(() => {
        //     return NativeStorage.getItem('HAS_LOGGED_IN')
        //         .then(value => { return value === true },
        //         error => console.error(error)
        //         );
        // },
        //     error => console.error(error)
        // );
        // return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
        //     return value === true;
        // });
    }

    handleError(msg, e = null) {
        return { error: msg };
    }

    setData(key,data) {
      return NativeStorage.setItem(key, data).then(
        () => true,
        (e) => this.handleError('Error storing item', e)
      );
    }

    getData(key) {
      return NativeStorage.getItem(key).then(
        (data) => this.processIsLoggedIn(data),
        (e) => this.handleError('Error getting ' + key +' ', e)
      );
    }




    processIsLoggedIn(data){
      return { isLoggedIn :data };
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


}
