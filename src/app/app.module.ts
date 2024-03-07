import { NgModule } from '@angular/core';
import { PrimeModule } from './prime.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SideNavigationComponent } from './pages/navigation/side-navigation/side-navigation.component';
import { FooterComponent } from './pages/navigation/footer/footer.component';
import { HeaderComponent } from './pages/navigation/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponentComponent } from './shared/card-component/card-component.component';
import { LessonsComponent } from './components/lessons/lessons/lessons.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SideNavigationComponent,
    FooterComponent,
    HeaderComponent,
    CardComponentComponent,
    LessonsComponent,
  ],
  exports: [
    AppComponent,
    MainPageComponent,
    SideNavigationComponent,
    FooterComponent,
    HeaderComponent,
    CardComponentComponent,
    LessonsComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
