import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "./models/book";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(Books: Book[], searchValue: string): Book[] {
    if (!Books || !searchValue) {
      return Books;
    }
    return Books.filter(books =>
        books.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        books.author.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
