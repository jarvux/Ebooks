import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BooksListMainComponent } from './containers/books-list-main';
import { BookDetailComponent } from './containers/book-detail';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { routes } from "./routes.books-main";

const COMPONENTS = [
  BooksListMainComponent,
  BookDetailComponent,
  BookInfoComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class BooksMainModule { }
