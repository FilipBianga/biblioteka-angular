import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {BooksComponent} from "./pages/books/books.component";
import {BookDetailsComponent} from "./pages/books/book-details/book-details.component";

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books/:id', component: BookDetailsComponent },
  {path: 'books', component: BooksComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{}
