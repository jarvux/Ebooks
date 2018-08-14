import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from "firebase";
import { Collection } from "../containers/collection-list/collection"
import { Books } from '../containers/collection-list/Books';

@Injectable({
  providedIn: 'root'
})
export class CollectionServiceService {

  constructor(private afdb: AngularFireDatabase) { }

  public getCollections(user: firebase.User) {
    return this.afdb.list<Collection>("collections/" + user.uid)
  }

  public saveCollection(user: firebase.User, data: any) {
    this.afdb.list("collections/" + user.uid).push(data);
  }

  public addBookToCollection(user: firebase.User, collectionId: string, data: any) {
    var books = this.afdb.list<Collection>("collections/" + user.uid + "/" + collectionId + "/books");
    books.push(data);
  }

  public deleteCollection(user: firebase.User, collectionId: string): void {
    this.afdb.list("collections/" + user.uid).remove(collectionId);
  }

  public booksFromCollection(user: firebase.User, collectionId: string) {
    var books = this.afdb.list<Books>("collections/" + user.uid + "/" + collectionId + "/books");
   // var collection = this.afdb.list<Collection>("collections/" + user.uid + "/" + collectionId);
    return books;
  }
}
