import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { CanActivate, CanDeactivate } from "@angular/router";
import { Observable, of } from 'rxjs';
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() : Observable<boolean> {
    if(!localStorage.getItem('bzgBooksApp') && !this.authService.isLoggedIn()){
      this.router.navigate(['/login']);
      return of(false);
    }
    return of(true);
  }
  
}
