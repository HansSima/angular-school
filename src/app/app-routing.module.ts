import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LessonModulPageComponent } from './pages/lesson-modul-page/lesson-modul-page.component';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, title: 'WASP - Main Page' },
  {
    path: 'modul',
    component: LessonModulPageComponent,
    title: 'WASP - Modul Page',
  },
  {
    path: 'lesson-page',
    component: LessonPageComponent,
    title: 'WASP - Lesson Page',
  },
  //TODO dodelat 404 komponentu
  //{ path: '**', title: 'Lesson Page', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
