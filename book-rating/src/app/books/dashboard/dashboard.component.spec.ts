import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;


  beforeEach(async () => {

    // Stub / Mock
    const ratingMock = {
      rateUp: (b: Book) => b
    };

    const storeMock = {
      getAll: () => of([])
    }

    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [
        /*RouterTestingModule.withRoutes([
          { path: 'books/:isbn', children: [] }
        ])*/
      ],
      providers: [
        // BRS ersetzen: Immer wenn BRS anfordert, wird stattdessen ratingMock ausgeliefert
        {
          provide: BookRatingService,
          useValue: ratingMock
        },
        {
          provide: BookStoreService,
          useValue: storeMock
        }
      ],
      schemas: [NO_ERRORS_SCHEMA] // Shallow Component Test
    })
    .compileComponents();


    // const location = TestBed.inject(Location);


    fixture = TestBed.createComponent(DashboardComponent);
    // TS-Klasseninstanz
    component = fixture.componentInstance;

    // HTML-Element
    // fixture.nativeElement // fixture.debugElement

    // Template aktualisieren
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp() for doRateUpX()', () => {
    // Arrange
    // Service anfordern (in Wahrheit ist das unser ratingMock!)
    const rs = TestBed.inject(BookRatingService); // früher: TestBed.get()

    // Testbuch
    const book = { isbn: '' } as Book; // Type Assertion

    // Spionieren!
    // spyOn(rs, 'rateUp').and.returnValue(book);
    // spyOn(rs, 'rateUp').and.callFake(b => b);
    // Methode ersetzen, aber im Hintergrund trotzdem originale Methode weiter verwenden
    spyOn(rs, 'rateUp').and.callThrough();


    // Act
    // Methode aufrufen
    component.doRateUpX(book);

    // Assert
    // prüfen, ob die richtige Methode im Service aufgerufen wurde
    expect(rs.rateUp).toHaveBeenCalledTimes(1);
    expect(rs.rateUp).toHaveBeenCalledWith(book);
  });
});
