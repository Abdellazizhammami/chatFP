import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommentaireService } from '../shared/services/commentaire.service';
import { LoginService } from '../shared/services/login.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public idReceiver = "";


  public corp: string;

  public textarea = 'add comment';
  public messages;
  public mes = { corps: '' };

  public user;
  public userName;
  public idcomment;
  public updatecorp;
  public updateState = false;
  public ucomid;
  constructor(private Message: CommentaireService, private routes: ActivatedRoute, private rt: Router, private auth: LoginService) { }

  ngOnInit() {
    //let id = this.routes.snapshot.paramMap.get('id');
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.idReceiver = id;


      console.log(this.idReceiver);
    });
    this.user = this.auth.userrr.user;





    this.Message.listerMessages(this.user._id,this.idReceiver).subscribe(file => {
      this.messages = file;
      console.log(file);
    });




  }


  submit() {



    this.Message.addMes(this.user._id, this.idReceiver, this.mes).subscribe(file => {
      console.log(file);
      console.log(this.mes);
      this.textarea = '';
      this.listercomments();
      this.Message.listerMessages(this.user._id,this.idReceiver).subscribe(file => {
        this.messages = file;
        console.log(file);
      });
  

    });
  }

  listercomments() {

    this.Message.listerMessages(this.user._id,this.idReceiver).subscribe(file => {
      this.messages = file;
      console.log(file);
    });

  }

}





