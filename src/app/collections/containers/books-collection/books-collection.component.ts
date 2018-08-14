import { Component, OnInit } from '@angular/core';
import { CollectionServiceService } from "../../services/collection-service.service"
import { Observable } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { map } from 'rxjs/operators';
import { Collection } from '../collection-list/collection';
import { Books } from "../collection-list/Books"
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-books-collection',
  templateUrl: './books-collection.component.html',
  styleUrls: ['./books-collection.component.css']
})
export class BooksCollectionComponent implements OnInit {

  books: Array<Books> = [];

  constructor(
    private scol: CollectionServiceService,
    private authFire: AngularFireAuth,
    private route: ActivatedRoute) {
    //this.getBooksFromCollection()
    //this.model = new Collection();
  }

  ngOnInit() {
    let id: string;

    this.route.params.subscribe((params: Params) => {
      id = params.id;

      this.authFire.authState
        .subscribe(user => {
          this.scol.booksFromCollection(user, id)
            .snapshotChanges()
            .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
            .subscribe((data) => {
              this.books = data as Books[];
            });
        });
    });

  }

  /*
    getBooksFromCollection(collectionId) {
      this.authFire.authState
        .subscribe(user => {
          this.scol.booksFromCollection(user, collectionId)
          .snapshotChanges()
          .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
          .subscribe((data) => {
              this.books = data as Books[];
            });
        });
    } 
    */
}
