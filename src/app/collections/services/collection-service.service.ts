import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from "firebase";
import { Collection } from "../containers/collection-list/collection"

@Injectable({
  providedIn: 'root'
})
export class CollectionServiceService {

  constructor(private afdb: AngularFireDatabase) { }

  public getCollections(user: firebase.User) {
    return this.afdb.list("collections/" + user.uid)
  }

  public saveCollection(user: firebase.User, data: any) {
    this.afdb.list("collections/" + user.uid).push(data);
  }

  public addBookToCollection(user: firebase.User, key: string, data: any) {
    this.afdb.list("collections/" + user.uid).set(key, data)// .update(key, data)
  }

  public deleteCollection(user: firebase.User, key: string): void {
    this.afdb.list("collections/" + user.uid).remove(key);
  }
}
