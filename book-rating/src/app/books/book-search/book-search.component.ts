import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, filter, Observable, switchMap } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  books$: Observable<Book[]>;

  searchControl = new FormControl('', { nonNullable: true });

  constructor(private bs: BookStoreService) {
    this.books$ = this.searchControl.valueChanges.pipe(
      filter(e => e.length >= 3 || e.length === 0),
      debounceTime(1000),
      switchMap(term => this.bs.search(term))
    );

    // TODO:
    // Leere Suchbegriffe
    // Ladeindikator
    // schönere Anzeige
    // niemals zwei gleiche begriffe direkt nacheinander suchen
  }

  ngOnInit(): void {
  }

}
