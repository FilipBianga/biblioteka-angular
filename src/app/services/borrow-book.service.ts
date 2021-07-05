import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Borrow } from '../models/borrow';
import { Book } from '../models/book';
import { BorrowedBook } from '../models/borrowed-book';

@Injectable({
  providedIn: 'root'
})
export class BorrowBookService {
  private urlBorrow = 'http://localhost:3000/borrow';
  private urlBook = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  postBorrow(borrow: Borrow): Observable<Borrow> {
    return this.http.post<Borrow>(this.urlBorrow, borrow).pipe(tap(console.log));
  }

  async getBorrowForUser(userID: string | null) {
    const allBorrows: Borrow[] = await this.http.get<Borrow[]>(this.urlBorrow).toPromise();
    const usersBorrows: Borrow[] = allBorrows.filter( (borrow: Borrow) => {
      return String(userID) === String(borrow.userID);
    }
      
      );
    return usersBorrows;
  }

  async getBorrowBooks(userID: string | null): Promise<BorrowedBook[]> {
    const allBooks: Book[] = await this.http.get<Book[]>(this.urlBook).toPromise();
    const userBorrows: Borrow[] = await this.getBorrowForUser(userID);
    const allBooksOfUsers = [];
    for (const book of allBooks) {
      for (const borrow of userBorrows) {
        if (book.id === borrow.bookID) {
          const borrowedBook: BorrowedBook = {book: book, date: borrow.date, borrowID: borrow.id} as BorrowedBook;
          allBooksOfUsers.push(borrowedBook);
        }
      }
    }
    return allBooksOfUsers;
  }

  deleteBorrow(borrowID: string) {
    return this.http.delete(`${this.urlBorrow}/${borrowID}`);
  }

  async isBorrowed(bookID: string | null) {
    const allBorrows: Borrow[] = await this.http.get<Borrow[]>(this.urlBorrow).toPromise();
    console.log("allBorrows");
    console.log(allBorrows);
    const borrow = allBorrows.find((bor) => String(bor.bookID) === String(bookID));
    console.log('borrow');
    console.log(borrow);
    console.log('isborrowed')
    console.log(Boolean(borrow))
    return Boolean(borrow);
  }

}
