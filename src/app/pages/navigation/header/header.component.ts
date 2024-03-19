import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  itemsSm: MenuItem[] = [];

  isMenuOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    this.itemsSm = [
      {
        icon: 'pi pi-pencil',
        routerLink: ['/'],
      },
      {
        icon: 'pi pi-refresh',
        routerLink: ['/web-basics'],
      },
      {
        icon: 'pi pi-trash',
        routerLink: ['/html-basics'],
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/css-basics'],
      },
      {
        icon: 'pi pi-external-link',
        routerLink: ['/angular-basics'],
      },
    ];

    this.items = [
      {
        label: 'Home',
        icon: '/assets/home_480.png',
        url: '/',
      },
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
