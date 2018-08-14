import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class CollectionServiceService {
  constructor(private afdb: AngularFireDatabase) { }

  public getCollections(user: firebase.User): AngularFireList<any[]> {
    return this.afdb.list("collections/" + user.uid)
  }

  public saveCollection(user: firebase.User, data: any) {
    this.afdb.list("collections/" + user.uid).push(data);
  }

  public addBookToCollection(user: firebase.User, collection: string, data: any) {
    this.afdb.list("collections/" + user.uid).update(collection, data);
  }
}
