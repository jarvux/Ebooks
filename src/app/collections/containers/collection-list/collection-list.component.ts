import { Component, OnInit } from '@angular/core';
import {Collection} from './collection';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = new Collection("","");

  saveColl(){
    debugger;
  }
}