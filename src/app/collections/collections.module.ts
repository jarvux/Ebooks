import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { routes } from "./routes.collections";

const COMPONENTS = [
  CollectionListComponent
];

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class CollectionsModule { }
