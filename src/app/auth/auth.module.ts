import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './containers/login/login.component';
import { routes } from "./routes.auth";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
