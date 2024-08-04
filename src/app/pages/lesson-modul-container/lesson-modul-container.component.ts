import { Component } from '@angular/core';
import { Lesson } from 'src/app/model/theory.model';
import { OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-lesson-modul-container',
  templateUrl: './lesson-modul-container.component.html',
  styleUrl: './lesson-modul-container.component.scss',
})
export class LessonModulContainerComponent implements OnInit {
  lesson!: Lesson;

  constructor(private firebaseServise: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseServise.setActiveCollection('angular');

    this.firebaseServise.getLessons().subscribe((data) => {
      this.lesson.lessonModules = data;
      console.log(this.lesson);
    });

    this.lesson = {
      motivations: [],
      lessonModules: [],
    };
  }
}
