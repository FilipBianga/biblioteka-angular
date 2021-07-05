import { Book } from "./book";

export interface BorrowedBook {
    book: Book,
    date: string,
    borrowID: string,
}
