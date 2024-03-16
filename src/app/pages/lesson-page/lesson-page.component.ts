import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

interface ContentItem {
  title?: string;
  content: string;
  close: boolean;
}

interface TheoryBlockItem {
  title?: string;
  content: string;
  img?: string;
  info?: Message[];
  warning?: Message[];
}

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styleUrl: './lesson-page.component.scss',
})
export class LessonPageComponent implements OnInit {
  motivations!: ContentItem[];
  questions!: ContentItem[];
  theory!: TheoryBlockItem[];
  comment: string = 'Napis komentar';

  ngOnInit() {
    this.motivations = [
      {
        title: 'O co v teto lekci jde?',
        content: 'Odpoved na otazku1',
        close: false,
      },
      { title: 'Proc to umet?', content: 'Odpoved na otazku2', close: true },
      {
        title: 'Co je nutne umet predtim?',
        content: 'Odpoved na otazku2',
        close: true,
      },
      {
        title: 'Na co si dat pozor? (FAQ k teto lekci)',
        content: 'Odpoved na otazku3',
        close: true,
      },
    ];
    this.questions = [
      { title: 'Co je to HTML?', content: 'Odpoved na otazku', close: true },
      {
        title: 'Jakou roli hraje HTML ve webovem vyvoji?',
        content: 'Odpoved na otazku',
        close: true,
      },
      {
        title: 'Co znamena tag <h1>, <h2>, <h3>...',
        content: 'Odpoved na otazku',
        close: true,
      },
    ];
    this.theory = [
      {
        title: 'Content1',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: './../../../assets/angular_logo.png',
        warning: [
          {
            severity: 'warn',
            summary: 'Warning',
            detail: 'Message Content',
          },
        ],
      },
      {
        title: 'Content2',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        info: [
          { severity: 'info', summary: 'Info', detail: 'Message Content' },
        ],
      },
      {
        title: 'Content3',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        img: './../../../assets/angular_logo.png',
      },
      {
        title: 'Content4',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ];
  }
}
