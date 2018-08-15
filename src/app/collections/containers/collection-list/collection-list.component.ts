import { Component, OnInit } from '@angular/core';
import { Collection } from './collection';
import { CollectionServiceService } from "../../services/collection-service.service"
import { Observable } from 'rxjs';
import { AngularFireAuth } from "angularfire2/auth";
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  collectionForm: FormGroup;
  submitted = false;

  model: Collection;
  collection: any
  arrayCollections: Observable<any[]>;

  constructor(private scol: CollectionServiceService, private authFire: AngularFireAuth, private formBuilder: FormBuilder) {
    this.model = new Collection();
  }

  ngOnInit() {
    this.collectionForm = this.formBuilder.group({
      name : ['', Validators.required],
      description: ['']
    });
    this.getCollections();
  }

  get f() { return this.collectionForm.controls; }

  getCollections() {
    this.authFire.authState
      .subscribe(user => {
        this.scol.getCollections(user)
          .snapshotChanges()
          .pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))))
          .subscribe((data) => {
            this.collection = data;
          });
      });
  }


  saveColl() {
    this.submitted = true;
    if (this.collectionForm.invalid) {
      return;
    }

    this.authFire.authState.subscribe(user => {
      this.scol.saveCollection(user, this.collectionForm.value);
      this.collectionForm.reset();
    });    
  }

  DeleteCollection(key) {
    this.authFire.authState.subscribe(user => {
      this.scol.deleteCollection(user, key);
    });
  }

}
