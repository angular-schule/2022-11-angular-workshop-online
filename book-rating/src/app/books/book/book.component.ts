import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  // Input: Daten können von der Elternkomponente hierher übergeben werden
  @Input() book?: Book;

  constructor() {
    // console.log('CTOR', this.book);
  }

  ngOnInit(): void {
    // console.log('NGO', this.book);
  }

}
