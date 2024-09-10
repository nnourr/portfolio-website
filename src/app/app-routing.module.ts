import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { WorkExperiencePageComponent } from './pages/work-experience-page/work-experience-page.component';
import { PersonalProjectsPageComponent } from './pages/personal-projects-page/personal-projects-page.component';
import { EcobeeBlogComponent } from './pages/work-experience-page/blog/ecobee/ecobee.blog';
import { RBCBlogComponent } from './pages/work-experience-page/blog/RBC/rbc.blog';
import { System1BlogComponent } from './pages/work-experience-page/blog/System1/system1.blog';
import { EBCBlogComponent } from './pages/work-experience-page/blog/EBC/EBC.blog';
import { BlogPageComponent } from './pages/work-experience-page/blog/blog.page';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'work-experience', component: WorkExperiencePageComponent },
  {path: 'blog', component: BlogPageComponent, children: [
    { path: 'ecobeeInternship', component: EcobeeBlogComponent},
    { path: 'RBCInternship', component: RBCBlogComponent},
    { path: 'System1Internship', component: System1BlogComponent},
    { path: 'EBCInternship', component: EBCBlogComponent},  
  ]},
  { path: 'personal-projects', component: PersonalProjectsPageComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
