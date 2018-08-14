import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CollectionServiceService } from '../../../collections/services/collection-service.service'
import { Observable } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";

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

  constructor(private serviceCollection: CollectionServiceService, private authFire: AngularFireAuth) {
    this.getCollections()

  }

  ngOnInit() {
  }

  getCollections() {
    this.authFire.authState
      .subscribe(
        user => {
          this.serviceCollection.getCollections(user).valueChanges().subscribe((data) => {
            this.collections = data
          })
        }
      );
  }

  addFavorite() {
    this.pushFavorite.emit(this.book);
  }

  addBookToCollection($event, book) {
    this.authFire.authState
      .subscribe(
        user => {
          let data = {
            name: this.collection.name,
            books: book
          }
          this.serviceCollection.addBookToCollection(user, "LJaApG7dP65xEHzyHYx", data);
        }
      );
  }
}
