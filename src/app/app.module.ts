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
import { BlogComponent } from './components/blog/blog.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EcobeeBlogComponent } from './pages/work-experience-page/blog/ecobee/ecobee.blog';
import { RBCBlogComponent } from './pages/work-experience-page/blog/RBC/rbc.blog';
import { EBCBlogComponent } from './pages/work-experience-page/blog/EBC/EBC.blog';
import { System1BlogComponent } from './pages/work-experience-page/blog/System1/system1.blog';
import { BlogPageComponent } from './pages/work-experience-page/blog/blog.page';

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
    EcobeeBlogComponent,
    RBCBlogComponent,
    EBCBlogComponent,
    BlogPageComponent,
    System1BlogComponent,
    BlogComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
