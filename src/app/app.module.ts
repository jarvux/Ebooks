import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BooksDBService } from "./api-data/api-books-demo";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { routes  } from "./routes";

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      BooksDBService, {dataEncapsulation: false, delay: 3000}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
