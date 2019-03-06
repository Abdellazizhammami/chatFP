import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { WebSocketService } from './web-socket.service';



@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  messages: Subject<any>;

  constructor(private http: HttpClient,private wsService: WebSocketService) {
    this.messages = <Subject<any>>wsService
      .connect()
      .map((response: any): any => {
        return response;
      })
  }
  sendMsg(msg) {
    this.messages.next(msg);
  }
    public addMes(idSender, idReceiver, corp){
      return this.http.post<any>('http://localhost:3001/mes/ajoutMes/'+ idSender +'/'+ idReceiver,corp);
      
    }
    
    listerMessages(idUser,idrec) {
      return this.http.get<any>('http://localhost:3001/mes/listerMes/'+idUser+'/'+idrec); 

    }

   
   }


  
   
