import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
    private url: string;
    private doneCallback: (response: any) => void;
    private failCallback: (err: any) => void;

    constructor(private http: Http) {}

    public endpoint(url: string) {
        this.url = url;
        return this;
    }
    public success(callback: (response: any) => void) {
        this.doneCallback = callback;
        return this;
    }
    public fail(callback: (err: any) => void) {
        this.failCallback = callback;
        return this;
    }
    public exec() {
        this.http
            .get(this.url)
            .map(res => res.json())
                .catch((err: any, caught: Observable<any>) => {
                this.failCallback(err);
                return [];
            })
            .subscribe(this.doneCallback);
    }
}
