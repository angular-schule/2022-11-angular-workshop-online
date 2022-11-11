import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() {}

  rateUp(book: Book): Book {
    // Early Exit / Gate Keeper
    if (book.rating >= 5) {
      return book;
    }

    return {
      ...book,
      // rating: book.rating < 5 ? book.rating + 1 : book.rating
      // rating: Math.min(5, book.rating + 1)
      rating: book.rating + 1
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(1, book.rating - 1)
    }
  }
}
