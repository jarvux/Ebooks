import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { FavoritesService } from "../../services/favorites.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  bookList: Observable<any[]>;

  constructor(private favService: FavoritesService, private authFire: AngularFireAuth) { 
    this.bookList = null;
  }

  ngOnInit() {
    this.authFire.authState
      .subscribe(
        user => {          
          this.bookList =  this.favService.listFavorites(user).valueChanges();
        }
      );    
  }

}
