import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'personal-projects', component: InProgressComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
