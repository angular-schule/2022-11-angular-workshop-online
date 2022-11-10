import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  books: Book[] = [];

  constructor() {
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
    console.log('UP', book);
  }

  doRateDownX(book: Book) {
    console.log('DOWN', book);
  }

}

