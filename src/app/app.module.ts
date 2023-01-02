import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';
import { BackgroundComponent } from './components/background/background.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoButtonsComponent } from './components/info-buttons/info-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DarkModeButtonComponent,
    BackgroundComponent,
    WorkExperienceComponent,
    NavbarComponent,
    InfoButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
