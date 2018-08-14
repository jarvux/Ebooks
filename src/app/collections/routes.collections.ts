import { Routes } from "@angular/router";
import { CollectionListComponent } from "./containers/collection-list/collection-list.component";
import {BooksCollectionComponent} from "../collections/containers/books-collection/books-collection.component"
export const routes: Routes = [
    {
        path: 'list',
        component: CollectionListComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'books/:id',
        component: BooksCollectionComponent
    },
];