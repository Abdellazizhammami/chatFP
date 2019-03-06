import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GesArtService {

  constructor(private http: HttpClient) { }
  public AjouterArts(Art){
    return this.http.post('http://localhost:3001/article/createArt',Art);
    
  }
  public ModifArts(idArt,idUser,body){
    return this.http.post('http://localhost:3001/article/updateArt/',idUser+'/',idArt + body);
    
  }

  public EffacArts(idArt,idUser){
    return this.http.get('http://localhost:3001/article/deleteArt'+idUser +'/'+ idArt);
    
  }

}
 
