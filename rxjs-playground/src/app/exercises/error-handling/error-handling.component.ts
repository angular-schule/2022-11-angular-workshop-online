import { Component } from '@angular/core';
import { ReplaySubject, throwError, of, EMPTY, retry, catchError, timer, Observable } from 'rxjs';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new ReplaySubject<unknown>();

  constructor(private es: ExerciseService) { }

  /**
   * Das Observable aus `this.es.randomError()` liefert mit hoher Wahrscheinlichkeit einen Fehler.
   * Probiere verschiedene Strategien aus, um den Fehler zu behandeln:
   * - wiederholen
   * - Fehler weiterwerfen
   * - Fehler umwandeln (in ein normales Element)
   * - Fehler verschlucken/ignorieren
   */

  start() {
    this.es.randomError().pipe(
      /*retry({
        count: 5,
        delay: () => timer(2000)
      })*/
      catchError(err => {
        // Fehler weiterwerfen
        // throw err;
        // return throwError(() => 'ERROR');

        // Fehler verschlucken
        // return new Observable(sub => sub.complete());
        // return of();
        // return [];
        return EMPTY;

        // Fehler ersetzen
        // return of('Nichts', 'passiert');
        // return ['Nichts', 'passiert!']
      })
    ).subscribe({
      next: e => this.logStream$.next(e),
      error: err => this.logStream$.next('❌ ERROR: ' + err),
      complete: () => this.logStream$.next('COMPLETE')
    });
  }
}
