import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { WorkExperiencePageComponent } from './pages/work-experience-page/work-experience-page.component';
import { PersonalProjectsPageComponent } from './pages/personal-projects-page/personal-projects-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'work-experience', component: WorkExperiencePageComponent },
  { path: 'personal-projects', component: PersonalProjectsPageComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
