import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../shared/book';

interface RatePayload {
  book: Book;
  direction: 'up' | 'down';
}

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush

})
export class BookComponent implements OnInit {

  // Input: Daten können von der Elternkomponente hierher übergeben werden
  @Input() book?: Book;
  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<Book>();
  // @Output() rate = new EventEmitter<RatePayload>();

  constructor() {
    // console.log('CTOR', this.book);
  }

  ngOnInit(): void {
    // console.log('NGO', this.book);
    console.log('NGONINIT', this.book?.isbn);
  }

  doRateUp() {
    // this.rate.emit({ book: this.book, direction: 'up' });
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }

  doDelete() {
    this.delete.emit(this.book);
  }

  log() {
    console.log('CD', Date.now());
  }

}
