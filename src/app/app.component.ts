import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links = [
    {
      label: 'Posts',
      link: '',
    },
    {
      label: 'Guest Book',
      link: 'guest-book',
    },
  ];

  activeLink = this.links[0];
}
