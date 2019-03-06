import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GesUserService {

  constructor(private http : HttpClient) { }


  public getUsers(idUser){
    return this.http.get('http://localhost:3001/dash/listerUser/'+idUser);
  }

  public addAdmin(idAdmin,idUser){
   return this.http.get<any>('http://localhost:3001/dash/ajoutAdmin/'+idAdmin+'/'+ idUser);
   

  }

  deleteUser(idAdmin,idUser){
    return this.http.get<any>('http://localhost:3001/dash/deleteUser/'+idAdmin+'/'+ idUser);

  }









}
