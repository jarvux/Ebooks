import { Routes } from "@angular/router";

export const routes: Routes = [
   {
        path:'login',
        loadChildren: './auth/auth.module#AuthModule'
   },
   {
        path: '',
        loadChildren: './core/core.module#CoreModule'
   },
   {
        path: "**",
        redirectTo: ""
    }
];