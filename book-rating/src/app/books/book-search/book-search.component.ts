import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchControl = new FormControl('', { nonNullable: true });

  constructor(private bs: BookStoreService) {
    this.searchControl.valueChanges
      .subscribe(e => {
        console.log(e);
      })
  }

  ngOnInit(): void {
  }

}
