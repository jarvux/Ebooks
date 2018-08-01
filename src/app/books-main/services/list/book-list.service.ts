import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError } from "rxjs/operators";
import { MessagesService } from "../../../alerts/services/messages.service";


@Injectable({
  providedIn: 'root'
})
export class BookListService {

  url = 'api/';

  constructor(private http: HttpClient, private alertService: MessagesService) { }

  getBookList(id?:string):Observable<any> {
    let url = this.url + 'books';
    if(id){
      url = url + `/?id=${id}`;
    }
    return this.http.get(url)
    .pipe(
      catchError(this.handleError('Obtener lista de libros', []))
    );
  }

  private handleError<T>(operation = 'operation', results?:T) {
    return (error:any):Observable<T> => {
      console.error(error);
      this.messages(`${operation} ha fallado: ${error.message}`);
      return of(results as T);

    }
  }

  private messages (msg: string) {
    let type = "error";
    this.alertService.message({msg: msg, type: type});
  }
}
