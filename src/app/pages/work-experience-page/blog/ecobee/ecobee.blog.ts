import { Component } from '@angular/core';
import { Blog } from '../../../../models/blog.model';
import { DarkModeService } from '../../../../services/dark-mode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ecobee-blog',
  templateUrl: './ecobee.blog.html',
})
export class EcobeeBlogComponent {
  blogContent: Blog = {
    bannerImage: 'assets/ecobee-banner.webp',
    date:'May 2024 - August 2024',
    title: 'ecobee',
    titleUrl: 'https://www.ecobee.com',
    headings: [
      'Hardware Service Bundles',
      'Third Party Device Integration',
      'SCRUM Lead',
      'Co-Op Presentation',
      'Learning Goals',
      'Acknowledgements'
    ]
  }

  darkMode$: Observable<boolean>
  constructor(darkModeService: DarkModeService) {
     this.darkMode$ = darkModeService.darkMode$;    
   }
 
}
