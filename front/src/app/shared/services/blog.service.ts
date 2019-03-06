import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {  }
  public listerArts(idArt:string){
    return this.http.get<any>('http://localhost:3001/article/consulterArt/'+idArt);
    
  }

 
}
 
 