import { Injectable } from '@angular/core';

import { HttpService } from '../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpService) { }
  loginUser(data:object){
    return this.http.loginApi(data);

  }
  registerUser(data:object){
    return this.http.registerApi(data);

  }
}

