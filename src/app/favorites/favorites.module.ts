import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FavoritesListComponent } from './containers/favorites-list/favorites-list.component';
import { CardBookComponent } from "./components/card-book/card-book.component";
import { routes } from "./routes.favorites";

const COMPONENTS = [
  FavoritesListComponent,
  CardBookComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class FavoritesModule { }
