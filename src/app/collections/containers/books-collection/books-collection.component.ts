import { Component, OnInit } from '@angular/core';
import { CollectionServiceService } from "../../services/collection-service.service"
import { Observable } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { map } from 'rxjs/operators';
import { Collection } from '../collection-list/collection';

@Component({
  selector: 'app-books-collection',
  templateUrl: './books-collection.component.html',
  styleUrls: ['./books-collection.component.css']
})
export class BooksCollectionComponent implements OnInit {

  model: Collection;
  collection: any
  arrayCollections: Observable<any[]>;

  constructor(private scol: CollectionServiceService, private authFire: AngularFireAuth) {
    this.model = new Collection();
  }

  ngOnInit() {
  }

}
