import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { concatMap, delay, map, Observable, switchMap, tap } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;
  loading = false;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
    // Synchroner Weg / PULL
    // const isbn = this.route.snapshot.paramMap.get('isbn'); // books/:isbn

    // Asynchroner Weg / PUSH
    this.book$ = this.route.paramMap.pipe(
      map(params => params.get('isbn')!),
      tap(() => this.loading = true),
      switchMap(isbn => this.bs.getSingle(isbn).pipe(delay(2000))),
      tap(() => this.loading = false),
    );



  }

  ngOnInit(): void {
  }

}
