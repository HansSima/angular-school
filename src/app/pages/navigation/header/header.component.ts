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
        routerLink: ['/modul'],
      },
      {
        icon: 'pi pi-trash',
        routerLink: ['/modul'],
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/modul'],
      },
      {
        icon: 'pi pi-external-link',
        routerLink: ['/modul'],
      },
    ];

    this.items = [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Web',
        url: 'modul',
      },
      {
        label: 'HTML',
        url: 'modul',
      },
      {
        label: 'CSS',
        url: 'modul',
      },
      {
        label: 'JS',
        url: 'modul',
      },
      {
        label: 'Angular',
        url: 'modul',
      },
      {
        label: 'Admin Page',
        url: 'admin-console',
      },
    ];
  }

  private checkCurrentPage(url: string): void {
    this.showBanner = url === '/';
  }
}
