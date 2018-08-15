import { Component, OnInit } from '@angular/core';
import { BookListService } from "../../services/list/book-list.service";
import { BookList } from "../../models/books";
import { ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-book-suggest',
  templateUrl: './book-suggest.component.html',
  styleUrls: ['./book-suggest.component.css']
})
export class BookSuggestComponent implements OnInit {

  booksList: BookList;
  book: any;
  constructor(private route: ActivatedRoute,private booksService: BookListService) { 
    let id:string;
    //id = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe((params: Params) => {
      id = params.id;
      
      this.booksService.getBook(id)
      .subscribe(
        (book: any) => {
          this.booksService.searchBooks(book.volumeInfo.publisher);
        }
      )
    });

    
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
