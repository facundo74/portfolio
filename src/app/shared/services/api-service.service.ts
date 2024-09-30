import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(
        public http : HttpClient,
    ) {}

    post(url: string, body: any, options?: any){
        return this.http.post(url, body, options);
    }


    get(url: string, options?: any){
        return this.http.get(url, options);
    }
}

