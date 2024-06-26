import { FirebaseService } from './../../services/firebase.service';
import { Component } from '@angular/core';
import { Lesson } from 'src/app/model/theory.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-modul-container',
  templateUrl: './lesson-modul-container.component.html',
  styleUrl: './lesson-modul-container.component.scss',
})
export class LessonModulContainerComponent implements OnInit {
  lesson: Lesson | undefined;

  constructor(private firebaseServise: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseServise.getLessons('html').subscribe((data) => {
      console.log(data);
    });

    this.firebaseServise.getAll('html').subscribe((data) => {
      console.log(data);
    });

    this.lesson = {
      motivations: [
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
      ],
      lessonModules: [
        {
          id: '1',
          description: 'Product Description',
          name: 'Co je Angular?',
          image: '../../../assets/angular_logo.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Základy Angularu',
          image: '../../../assets/angular_logo.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Typescript',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/800px-Typescript_logo_2020.svg.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Vytvoření projektu a popis',
          image: '../../../assets/angular_logo.png',
          category: 'Accessories',
          rating: 5,
        },

        {
          id: '1',
          description: 'Product Description',
          name: 'Hooks',
          image: '../../../assets/angular_logo.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Routing',
          image: '../../../assets/angular_logo.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Databinding',
          image: '../../../assets/angular_logo.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Direktivy',
          image: '../../../assets/angular_logo.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Service a Dependency Injection',
          image: '../../../assets/angular_logo.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Pipes',
          image:
            'https://miro.medium.com/v2/resize:fit:400/1*YbWctbvd5k5tvAjPcu6YPA.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Http a Observables',
          image: 'https://cdn-icons-png.freepik.com/512/4661/4661242.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'RxJs',
          image:
            'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'NGRX',
          image: 'https://v8.ngrx.io/assets/images/badge.svg',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          description: 'Product Description',
          name: 'Route protection',
          image: '../../../assets/angular_logo.png',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          name: 'Angular Material',
          description: 'Product Description',
          image:
            'data:image/png;base64,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',
          category: 'Accessories',
          rating: 5,
        },
        {
          id: '1',
          name: 'Firebase',
          description: 'Product Description',
          image:
            'https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png',
          category: 'Accessories',
          rating: 5,
        },
      ],
    };
  }
}
