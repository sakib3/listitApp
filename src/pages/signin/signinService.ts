import { Injectable } from '@angular/core';
import { WebRequest } from '../../providers/web-request';
import { Component } from '@angular/core';

@Injectable()({
    templateUrl: 'signin.html',
    providers: [WebRequest]
})
export class SignInService {

  constructor(private request: WebRequest) { }

  getToken(userData){
    let postData = 'email=' + userData.email + '&password=' + userData.password;
    return this.request.post("employees/login",postData)
        .then((res) => res);
  }
}
