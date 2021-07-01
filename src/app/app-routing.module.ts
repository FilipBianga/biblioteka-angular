import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BooksComponent} from "./pages/books/books.component";
import {BookDetailsComponent} from "./pages/books/book-details/book-details.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {AddBookComponent} from "./pages/add-book/add-book.component";
import {UsersComponent} from "./pages/users/users.component";
import {UserDetailsComponent} from "./pages/users/user-details/user-details.component";
import {BookSearchComponent} from "./pages/books/book-search/book-search.component";

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books/:id', component: BookDetailsComponent },
  {path: 'books', component: BooksComponent},
  {path: 'search', component: BookSearchComponent},
  {path: 'add-book', component: AddBookComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
