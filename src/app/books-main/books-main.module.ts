import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BooksListMainComponent } from './containers/books-list-main';
import { BookDetailComponent } from './containers/book-detail';
import { BookSuggestComponent } from './containers/book-suggest';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { routes } from "./routes.books-main";

import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  BooksListMainComponent,
  BookSuggestComponent,
  BookDetailComponent,
  BookInfoComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: COMPONENTS
})
export class BooksMainModule { }
