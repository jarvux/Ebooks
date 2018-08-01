import { Component, OnInit } from '@angular/core';
import {Collection} from './collection';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  model: Collection;
  collection: Collection[];

  constructor() { }

  ngOnInit() {
    this.model = new Collection();
    this.collection = this.getCollections();
  }
 

  getCollections(): Collection[]{
    return [];
  }

  saveColl(){
    this.collection.push(this.model)
  }
}
