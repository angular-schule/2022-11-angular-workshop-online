import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating!';

  menuItems = [
    { label: 'Dashboard', path: '/books' },
    { label: 'Search', path: '/books/search' },
    { label: 'Create', path: '/books/create' }
  ];
}
