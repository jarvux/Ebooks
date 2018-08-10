import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database"

@Injectable({
  providedIn: 'root'
})
export class CollectionServiceService {
  constructor(private afdb: AngularFireDatabase) { }

  public getCollections(): AngularFireList<any[]>
  {
    console.log(this.afdb.list("collections"))
    return this.afdb.list("/collections")
  }

  public saveCollection(data: any)
  {
    this.afdb.list("/collections").push(data);
  }
}
