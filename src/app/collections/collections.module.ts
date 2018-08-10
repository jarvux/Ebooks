import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { routes } from "./routes.collections";


import { FormsModule } from '@angular/forms';

const COMPONENTS = [
  CollectionListComponent
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
