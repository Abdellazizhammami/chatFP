import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginService: LoginService, private routes: Router) {

  }

  public statu;
  public user;
  public isStudent;

  ngOnInit() {
    // console.log(this.login.userrr.user);

    // console.log(this.statu);
  }
  logout() {
    this.loginService.logout();
    // this.statu = this.login.loggedIn();
    // si le routes est /hom la page ne se refréche pas ask chahir for it
    this.routes.navigate(['/home']);

  }
}
