import { Component, OnInit } from '@angular/core';
import { Collection } from './collection';
import { CollectionServiceService } from "../../services/collection-service.service"
import { Observable } from '../../../../../node_modules/rxjs';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  model: Collection;
  collection: Array<any> = [];
  arrayCollections: Observable<any[]>;

  constructor(private scol: CollectionServiceService, private authFire: AngularFireAuth) {
    this.model = new Collection();
  }

  ngOnInit() {
     this.getCollections()
  }
  
  getCollections(){
    this.authFire.authState
    .subscribe(
      user => {          
        this.scol.getCollections(user).valueChanges().subscribe((data) =>{
          this.collection = data
        })
      }
    );
  }

  saveColl() {
    this.authFire.authState.subscribe( user => {
      this.scol.saveCollection(user, this.model)
    })
  }

  SelectCollection(index){
    debugger;
  }
}
