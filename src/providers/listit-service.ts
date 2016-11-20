import { Injectable } from '@angular/core';
import { WebRequest } from './web-request';
import { Component } from '@angular/core';

@Injectable()
export class ListItService {

  constructor(private request: WebRequest) { }

  getTokenForSignIn(userFormData){
    let postData = 'email=' + userFormData.email + '&password=' + userFormData.password;
    return this.request.post("employees/login",postData)
        .then((res) => res);
  }

  getTokenForSignUp(userFormData){
    let postData = 'email=' + userFormData.email + '&password=' + userFormData.password;
    return this.request.post("employees/signup",postData)
        .then((res) => res);
  }
}
