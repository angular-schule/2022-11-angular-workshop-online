import { Component, Input, OnInit, TrackByFunction } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  trackBook: TrackByFunction<Book> = (index, item) => {
    return item.isbn;
  }

  constructor(private rs: BookRatingService, private bs: BookStoreService) {
    this.bs.getAll().subscribe(books => {
      this.books = books;
    });
  }

  ngOnInit(): void {}

  doRateUpX(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDownX(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  private updateList(ratedBook: Book) {
    // Achtung: Mutable Operation!
    // const index = findIndex(ratedBook);
    // this.books[index] = ratedBook;

    // [1,2,3,4,5,6].map(e => e * 10); // [10, 20, 30, 40, 50, 60] // Projektionsfunktion
    // [1,2,3,4,5,6].filter(e => e % 2 === 0); // [2, 4, 6] // Prädikatsfunktion

    this.books = this.books.map(b => {
      if (b.isbn !== ratedBook.isbn) {
        return b;
      } else {
        return ratedBook;
      }
    });


    // this.books = this.books.map(b => b.isbn !== ratedBook.isbn ? b : ratedBook);

  }

}

