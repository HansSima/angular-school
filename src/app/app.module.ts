import { NgModule } from '@angular/core';
import { PrimeModule } from './prime.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SideNavigationComponent } from './pages/navigation/side-navigation/side-navigation.component';
import { FooterComponent } from './pages/navigation/footer/footer.component';
import { HeaderComponent } from './pages/navigation/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponentComponent } from './shared/card-component/card-component.component';
import { LessonsComponent } from './components/lessons/lessons/lessons.component';
import { TranslocoRootModule } from './transloco-root.module';

import { AngularPageComponent } from './pages/angular-page/angular-page.component';
import { WebBasicsPageComponent } from './pages/web-basics-page/web-basics-page.component';
import { HtmlBasicsPageComponent } from './pages/html-basics-page/html-basics-page.component';
import { CssBasicsPageComponent } from './pages/css-basics-page/css-basics-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SideNavigationComponent,
    FooterComponent,
    HeaderComponent,
    CardComponentComponent,
    LessonsComponent,
    AngularPageComponent,
    WebBasicsPageComponent,
    HtmlBasicsPageComponent,
    CssBasicsPageComponent,
  ],
  exports: [
    AppComponent,
    MainPageComponent,
    SideNavigationComponent,
    FooterComponent,
    HeaderComponent,
    CardComponentComponent,
    LessonsComponent,
    AngularPageComponent,
    WebBasicsPageComponent,
    HtmlBasicsPageComponent,
    CssBasicsPageComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeModule,
    HttpClientModule,
    TranslocoRootModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
