import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CollectionServiceService } from '../../../collections/services/collection-service.service'
import { Observable } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { map } from 'rxjs/operators';
import { Collection } from "../../../collections/containers/collection-list/collection"

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  @Input() book: any;
  @Output() pushFavorite = new EventEmitter<any>();
  collections: Array<any> = [];
  collection: any;

  constructor(private scol: CollectionServiceService, private authFire: AngularFireAuth) {
    this.getCollections()
  }

  ngOnInit() {
  }

  getCollections() {
    this.authFire.authState
      .subscribe(user => {
        this.scol.getCollections(user)
        .snapshotChanges()
        .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
        .subscribe((data) => {
            this.collections = data;
          });
      });
  } 

  addFavorite() {
    this.pushFavorite.emit(this.book);
  }

  addBookToCollection(book) {
    let a = 
    this.authFire.authState
      .subscribe(
        user => {
          let data = {
            key : this.collection.key,
            name: this.collection.name,
            description : "desc",
            books: []
          }
          data.books.push(book)
          this.scol.addBookToCollection(user, this.collection.key, data);
        }
      );
      
  }
}
