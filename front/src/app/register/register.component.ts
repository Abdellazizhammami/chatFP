import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../shared/services/register.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nom: string;
  prenom: string;
  mail: string;
  pwd: string;

  user = {};
  public new;

  constructor(private regUser: RegisterService, private routes: Router) { }

  ngOnInit() {

  }


  registerUser() {

    console.log(this.user);
    this.regUser.ApiRegister(this.user).subscribe(file => {
      localStorage.setItem('token',file.json().token);
          
      console.log(file.json());


      
      this.routes.navigate(['/home']);
    })

    //}
  }
}

