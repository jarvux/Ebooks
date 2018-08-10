import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login, ILogin } from "../../models/user/auth";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();
  @Output() signByGoogle = new EventEmitter<boolean>();

  login : ILogin;

  constructor() {
    this.login = new Login();
   }

  ngOnInit() {
  }

  submit() {
    this.submitted.emit(this.login);
  }

  signGoogle(){
    this.signByGoogle.emit(true);
  }

}
