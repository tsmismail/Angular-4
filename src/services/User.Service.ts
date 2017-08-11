import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
    constructor(private http:Http){}
    getUserDetails(){
        return this.http.get('https://reqres.in/api/users').map((res:Response)=> res.json());
    }
}
