import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  showBanner: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkCurrentPage(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentPage(event.url);
      }
    });

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
        url: '/',
      },
      {
        label: 'Web',
        url: 'web-basics',
      },
      {
        label: 'HTML',
        url: 'html-basics',
      },
      {
        label: 'CSS',
        url: 'css-basics',
      },
      {
        label: 'JS',
        url: 'css-basics',
      },
      {
        label: 'Angular',
        url: 'angular-basics',
      },
    ];
  }

  private checkCurrentPage(url: string): void {
    this.showBanner = url === '/';
  }
}
