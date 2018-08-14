import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { routes } from "./routes.collections";
import { BooksCollectionComponent} from "../collections/containers/books-collection/books-collection.component"

import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  CollectionListComponent,
  BooksCollectionComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: COMPONENTS
})
export class CollectionsModule { }
