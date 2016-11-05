import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Toast,SQLite } from 'ionic-native';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class LocalStorageService {
    public personList: Array<Object>;
    private table: String;
    private db: any;
    public constructor(private navCtrl: NavController, public storage: Storage) {
    }

    public add(email,password){
      this.storage.set('email', email);
      this.storage.set('password', password);
      return this.get();
    }

    public get(){
      return this.storage.get('email').then((email) => {
        return this.storage.get('password').then((password) => {
          return {'email':email, 'password':password};
        });
      });
    }

    public getError(error) {
        return { error: 'SQLError :' + error.err.message };
    }
}
