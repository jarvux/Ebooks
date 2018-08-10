import { Component, OnInit } from '@angular/core';
import { BookListService } from "../../services/list/book-list.service";
import { BookList } from "../../models/books";

@Component({
  selector: 'app-books-list-main',
  templateUrl: './books-list-main.component.html',
  styleUrls: ['./books-list-main.component.css']
})
export class BooksListMainComponent implements OnInit {

  booksList: BookList;

  constructor(private booksService: BookListService) { 
    this.booksService.searchBooks('Software');
  }

  ngOnInit() {
    this.booksService.bookList
    .subscribe(
      (books:BookList) => {
        if(books){
          this.booksList = books;
        }        
      }
    );
  }

}
