import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'br-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  standalone: true,
  imports: [NgFor, /*CommonModule*/]
})
export class RatingComponent implements OnInit {

  @Input() rating: number = 0;

  constructor() { }

  ngOnInit(): void {}

  getStars() {
    return new Array(this.rating)
  }

}
