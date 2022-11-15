import { Component, InjectFlags, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    /*address: new FormGroup({
      city: new FormControl(''),
      street: new FormControl(''),
    }),
    authors: new FormArray([
      new FormControl(''),
      new FormControl(''),
      new FormControl(''),
    ]),*/
    description: new FormControl('', { nonNullable: true }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [Validators.min(1), Validators.max(5), Validators.pattern(/\d*/)]
    }),
    price: new FormControl(0, { nonNullable: true, validators: Validators.min(1) }),
  });

  ngOnInit(): void {
    this.bookForm.value
  }

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);

    if (!control) {
      return false;
    }

    //return !!control && control.invalid && control.touched;
    return control.invalid && control.touched;

    /*if (control) {
      return control.invalid && control.touched;
    } else {
      return false;
    }*/
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    if (!control) {
      return false;
    }


    // return !!control.getError(errorCode) && control.touched;
    // return control.errors?.[errorCode] && control.touched;
    return control.hasError(errorCode) && control.touched;
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
