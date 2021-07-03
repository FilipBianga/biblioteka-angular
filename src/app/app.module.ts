import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BookLayoutComponent } from './pages/books/book-layout/book-layout.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { UsersComponent } from './pages/users/users.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { SearchFilterPipe } from './search-filter.pipe';
import { BookSearchComponent } from './pages/book-search/book-search.component';
import { UserDetailsComponent } from './pages/users/user-details/user-details.component';
import { BookBorrowComponent } from './pages/books/book-borrow/book-borrow.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BooksComponent,
    BookDetailsComponent,
    PageNotFoundComponent,
    BookLayoutComponent,
    UsersComponent,
    SearchFilterPipe,
    BookSearchComponent,
    UserDetailsComponent,
    BookBorrowComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
