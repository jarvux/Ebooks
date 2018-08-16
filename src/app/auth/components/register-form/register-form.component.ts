import { Component, OnInit, Output, NgZone } from '@angular/core';
import { Login, ILogin } from "../../models/user/auth";
import { AuthService } from "../../services/auth/auth.service";
import { EventEmitter } from 'events';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();

  login : ILogin;

  constructor(private authService: AuthService, private router: Router, private zone: NgZone) { 
    this.login = new Login();
  }

  ngOnInit() {
  }

  save() {
   // this.submitted.emit(this.login);
   this.registerUser();
   
   console.info(this.login.email);
   console.info(this.login.password);
  }


  
  registerUser(){
    
         this.authService.register(this.login);
    
  }

}
