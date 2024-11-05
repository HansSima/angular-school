import { Component, Input } from '@angular/core';
import { Lesson } from '../../../model/theory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-modul-page',
  templateUrl: './lesson-modul-page.component.html',
  styleUrl: './lesson-modul-page.component.scss',
})
export class LessonModulPageComponent {
  @Input() lesson!: Lesson;

  value: number = 3;

  constructor(private router: Router) {}

  navigateToLesson() {
    console.log('Hello world');
    this.router.navigate(['lesson-page']);
  }
}
