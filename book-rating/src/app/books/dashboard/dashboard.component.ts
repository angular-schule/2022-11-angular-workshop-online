import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private rs: BookRatingService) {
    this.books = [
      {
        isbn: '12345',
        title: 'Angular',
        description: 'Das große Praxisbuch',
        rating: 5,
        price: 42.9
      },
      {
        isbn: '54321',
        title: 'Vue.js',
        description: 'Das grüne Framework',
        rating: 3,
        price: 39.9
      }
    ];
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

