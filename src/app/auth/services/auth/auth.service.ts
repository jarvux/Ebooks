import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { ILogin } from "../../models/user/auth";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private router: Router, private authFire: AngularFireAuth) {
    this.user = authFire.authState;
    this.user.subscribe(
      user => {
        if(user){
          this.userDetails = user;
        }else {
          this.userDetails = null;
        }        
      }
    )
   }

  login(auth : ILogin) {
    return this.authFire.auth.signInWithEmailAndPassword(auth.email, auth.password);
  }

  signWithGoogle() {
    return this.authFire.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn():boolean {
    if(this.userDetails == null){
      return false;
    }else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem('bzgBooksAppToken');
    this.authFire.auth.signOut()
    .then(
      res => {
        this.router.navigate(['/login']);
      }
    );    
  }

  register(auth : ILogin){
    console.info("authServices....register")
    console.info(auth.email);
    console.info(auth.password);

    this.authFire.auth.createUserWithEmailAndPassword(auth.email,auth.password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
     


  }
  
}
