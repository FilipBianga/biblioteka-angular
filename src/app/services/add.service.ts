import {Injectable} from "@angular/core";
import {Book} from "../models/book";

@Injectable({
    providedIn: 'root'
})
export class AddService {
    book: Book[] = [];

    addToList(book: Book){
        this.book.push(book);
    }

    getList(){
        return this.book;
    }
}
