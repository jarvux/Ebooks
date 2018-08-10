import { Component, OnInit } from '@angular/core';
import { Collection } from './collection';
import { CollectionServiceService } from "../../services/collection-service.service"
import { Observable } from '../../../../../node_modules/rxjs';


@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  model: Collection;
  collection: Array<any> = [];
  arrayCollections: Observable<any[]>;

  constructor(private scol: CollectionServiceService) {
    this.model = new Collection();
  }

  ngOnInit() {
    this.model = new Collection();
    this.getCollections();
  }

  getCollections() {
    this.scol.getCollections().valueChanges().subscribe((data)=>{
      this.collection = data;
    })
  }

  saveColl() {
    console.log(JSON.stringify(this.model))
    this.scol.saveCollection(this.model);
    this.getCollections();
  }
}
