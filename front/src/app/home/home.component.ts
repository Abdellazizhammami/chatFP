import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userServ: HomeService, private auth: LoginService, private routes: Router) { }

  public users;
  public user;
  public idAdmin;

  ngOnInit() {

    this.user=this.auth.userrr.user;
    console.log(this.user)


    this.getuserss();
    


  }

  getuserss() {

    

    this.userServ.getUsers(this.user._id).subscribe(file => {
      this.users = file.json();
      console.log(file.json());
    })

  }
  chat(idRec){
    this.routes.navigate(['/chat', idRec])
  }








}


