import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public userrr;

  constructor(private http: Http) {
    if (this.getToken())
      this.userrr = this.getUser(this.getToken());
  }


  public ApiLogin(user) {
    return this.http.post('http://localhost:3001/auth/login', user);
  }
  public loggedIn() {
    if (localStorage.getItem('token')) { return true }
    else { return false }
  }
  public getStatus() {

    return this.userrr.user.status;


  }
  public isStudent() {
    if(this.userrr){

    if (this.userrr.user.status == 'Student') { return true }
    else { return false };} else return false;


  }
  public logout() {
    localStorage.removeItem('token');

  }
  public getToken() {
    return localStorage.getItem('token');
  }

  public getUser(token) {
    
    if (token !== null) {
       localStorage.setItem('token', token);
      this.userrr = jwt_decode(token);
      
      return this.userrr;
    }
    else return 'you are not connected';
  }
  
}
