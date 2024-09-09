import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';
import { BackgroundComponent } from './components/background/background.component';
import { WorkExperiencePageComponent } from './pages/work-experience-page/work-experience-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoButtonsComponent } from './components/info-buttons/info-buttons.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { WorkExperienceContainerComponent } from './components/work-experience-container/work-experience-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalProjectsPageComponent } from './pages/personal-projects-page/personal-projects-page.component';
import { ProjectContainerComponent } from './components/project-container/project-container.component';
import { EcobeeSummerComponent } from './pages/work-experience-page/ecobee-summer/ecobee-summer.component';
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DarkModeButtonComponent,
    BackgroundComponent,
    WorkExperiencePageComponent,
    NavbarComponent,
    InfoButtonsComponent,
    InProgressComponent,
    WorkExperienceContainerComponent,
    PersonalProjectsPageComponent,
    ProjectContainerComponent,
    EcobeeSummerComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
