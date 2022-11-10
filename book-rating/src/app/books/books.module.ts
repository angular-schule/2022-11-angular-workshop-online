import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RatingComponent } from './rating/rating.component';




@NgModule({
  declarations: [
    BookComponent,
    DashboardComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
