import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter, Observer, Subscriber, take, takeUntil } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // of('A', 'B', 'C')
    // from([1,2,3,4,5,6,7])
    // interval(1000) // ---0---1---2---3---4--- ...
    // timer(2000) // ------0|
    // timer(3000, 1000) // ---------0---1---2---3---4---5---6 ...
    // timer(0, 1000) // 0---1---2---3---4---5---6 ...


    timer(0, 1000).pipe(
      map(e => e * 3),
      filter(e => e % 2 === 0)
    ).subscribe({
      next: e => this.log(e),
      complete: () => this.log('FERTIG!')
    });


    /******************************/

    function producer(sub: Subscriber<number>) {
      const result = Math.random();
      sub.next(result);
      sub.next(2);
      sub.next(3);

      setTimeout(() => sub.next(10), 2000)
      setTimeout(() => sub.complete(), 3000)

    }

    const obs: Observer<number> = {
      next: (value) => console.log(value),
      error: (err) => console.error(err),
      complete: () => console.log('FERTIG!')
    }

    // producer(obs);
    const myObservable$ = new Observable(producer);
    // myObservable$.subscribe(obs);
    // myObservable$.subscribe(obs);
    // myObservable$.subscribe(obs);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
