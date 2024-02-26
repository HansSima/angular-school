import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Web Development',
        icon: '/assets/web_64.png',
        url: 'web-basics',
      },
      {
        label: 'HTML',
        icon: '/assets/html_logo_480.png',
        url: 'html-basics',
      },
      {
        label: 'CSS',
        icon: '/assets/css_logo_480.png',
        url: 'css-basics',
      },
      {
        label: 'Angular',
        icon: '/assets/angular_logo.png',
        url: 'angular-basics',
      },
    ];
  }
}
