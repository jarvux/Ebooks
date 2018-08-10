import { Component, OnInit, NgZone } from '@angular/core';
import { ILogin } from '../../models/user/auth';
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  auth(event : ILogin) {
    if(event) {
      this.authService.login(event)
      .then(
        auth => {
          localStorage.setItem('bzgBooksApp', JSON.stringify(auth));
          this.router.navigate(['main']);
        },
        error => {
          alert("Usuario o Contraseña Invalida.");
        }
      );
    }
  }

  signWithGoogle(event) {
    if(event){
      this.authService.signWithGoogle()
      .then(
        user => {
          localStorage.setItem('bzgBooksApp', JSON.stringify(user));
          this.zone.run(() => {
            this.router.navigate(['main']);
          });          
        }
      );
    }
  }

}
