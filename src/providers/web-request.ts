import { Injectable } from '@angular/core';
import { SignIn } from './signinModel';


import { Http, Headers, RequestOptions } from '@angular/http';

import { UserData } from './user-data';


@Injectable()
export class WebRequest {
    rootUrl: any;
    constructor(public http: Http) {
        this.rootUrl = "https://lisit.herokuapp.com/";
    }

    get(urlSegment) {
        return new Promise(resolve => {
            var url = this.rootUrl + urlSegment;
            this.http.get(url)
                .subscribe(
                res => resolve(res.json()),
                err => resolve(this.handleError(err.json()))
                );
        });
    }

    post(urlSegment, data) {
        return new Promise(resolve => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            });
            let options = new RequestOptions({
                headers: headers
            });
            let url = this.rootUrl + urlSegment;
            console.log(url, data)
            this.http.post(url, data, options)
                .subscribe(
                res => resolve(res.json()),
                err => resolve(this.handleError(err.json()))
                );
        });
    }

    handleError(e) {
        var errMsg = e.message || e.message;
        return { error: errMsg };
    }

}
