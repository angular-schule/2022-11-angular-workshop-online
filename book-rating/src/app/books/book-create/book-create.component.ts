import { Component, InjectFlags, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
        Validators.pattern(/^[0-9\-]*$/)
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.maxLength(100)
      ]
    }),
    description: new FormControl('', { nonNullable: true }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [Validators.min(1), Validators.max(5), Validators.pattern(/\d*/)]
    }),
    price: new FormControl(0, { nonNullable: true, validators: Validators.min(1) }),
  });

  ngOnInit(): void {
  }

  isInvalid(controlName: string): boolean {
    // TODO
    return false;
  }

}


/*
TODO:
  - Fehlermeldungen darstellen
    - "Die ISBN ist ungültig."
    - "Die ISBN ist zu kurz."
  - Submit-Button
  - abschicken
  - Buch-Objekt erstellen
  - HTTP
  - bei Erfolg:
    - Redirect zur Detailseite
    - Meldung ausgeben
    - Formular zurücksetzen
*/
