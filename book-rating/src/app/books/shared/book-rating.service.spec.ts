import { TestBed } from '@angular/core/testing';
import { Book } from './book';

import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    // Arrange

    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);
    // Alternativ:
    // service = new BookRatingService();

    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      price: 3
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up by one', () => {
    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(4); // NICHT: .toBe(book.rating + 1)
  });

  it('should rate down by one', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not rate higher than 5', () => {
    // Arrange
    book.rating = 5;

    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).not.toBeGreaterThan(5);
    expect(ratedBook.rating).not.toBeLessThan(5);
  });

  it('should not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});
