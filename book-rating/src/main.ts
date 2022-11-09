import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  /////////////////////////////




export class Customer {
  /*private id: number;

  constructor(id: number) {
    this.id = id;
  }*/

  constructor(public id: number) {}

  fooBar(foo: string | number, arg?: string): [boolean, boolean] {

    setTimeout(() => {
      console.log('ID ist:', this.id);
    }, 2000);

    return [true, true];
  }
}


export const myCustomer = new Customer(3);
console.log(myCustomer);


myCustomer.fooBar(5, '');

//////


export function foo() {}

