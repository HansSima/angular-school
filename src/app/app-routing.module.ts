import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { WebBasicsPageComponent } from './pages/web-basics-page/web-basics-page.component';
import { HtmlBasicsPageComponent } from './pages/html-basics-page/html-basics-page.component';
import { CssBasicsPageComponent } from './pages/css-basics-page/css-basics-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'web-basics', component: WebBasicsPageComponent },
  { path: 'html-basics', component: HtmlBasicsPageComponent },
  { path: 'css-basics', component: CssBasicsPageComponent },
  { path: 'angular-basics', component: AngularPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
