import { NgModule } from '@angular/core';
import { PrimeModule } from './prime.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SideNavigationComponent } from './pages/navigation/side-navigation/side-navigation.component';
import { FooterComponent } from './pages/navigation/footer/footer.component';
import { HeaderComponent } from './pages/navigation/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponentComponent } from './shared/card-component/card-component.component';
import { LessonsComponent } from './components/lessons/lessons/lessons.component';
import { TranslocoRootModule } from './transloco-root.module';

import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { LoginComponent } from './shared/login/login.component';
import { BannerComponent } from './pages/navigation/banner/banner.component';
import { LessonModulPageComponent } from './pages/lesson-modul-page/lesson-modul-page.component';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SideNavigationComponent,
    FooterComponent,
    HeaderComponent,
    CardComponentComponent,
    LessonsComponent,
    LessonPageComponent,
    LoginComponent,
    BannerComponent,
    LessonModulPageComponent,
  ],
  exports: [
    AppComponent,
    MainPageComponent,
    SideNavigationComponent,
    FooterComponent,
    HeaderComponent,
    CardComponentComponent,
    LessonsComponent,
    LessonPageComponent,
    LoginComponent,
    BannerComponent,
    LessonModulPageComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeModule,
    HttpClientModule,
    TranslocoRootModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
