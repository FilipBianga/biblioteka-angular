import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BookLayoutComponent } from './pages/books/book-layout/book-layout.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddBookComponent,
    BooksComponent,
    BookDetailsComponent,
    PageNotFoundComponent,
    BookLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
