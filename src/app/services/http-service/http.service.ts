import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = "https://fundoonotes.incubation.bridgelabz.com/api"
  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    Authorization: localStorage.getItem('token') || ""
    // Authorization: "zgu6aTuZGNxTMdXN5y4k649FMpJrkQqpyaWxLaKmwn2bQ9o80dRKgyDUWfe80nHC"
  })

  constructor(public http: HttpClient) { }
  loginApi(data:object){
    return this.http.post( `${this.baseUrl}/user/login`,data)}
  
    registerApi(data:object){
      return this.http.post( `${this.baseUrl}/user/userSignUp`,data)}
    getNoteList(){
      this.http.get(`${this.baseUrl}/notes/getNoteList`,{headers:this.authHeader});
    }
}
