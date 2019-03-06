import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private logUser:LoginService, private _routes : Router) { }
  canActivate(): boolean {

    if(this.logUser.loggedIn()){
      return true;
    }
    else{
      this._routes.navigate(['/login']);
      return false;
    }
  
  }
}
