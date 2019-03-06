import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : Http) { }

  
  public getUsers(idUser){
    return this.http.get('http://localhost:3001/user/listerUser/'+idUser);
  }
}
