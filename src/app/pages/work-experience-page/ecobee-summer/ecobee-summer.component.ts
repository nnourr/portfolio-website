import { Component } from '@angular/core';
import { Blog } from '../../../models/blog.model';
import { DarkModeService } from '../../../services/dark-mode.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ecobee-summer',
  templateUrl: './ecobee-summer.component.html',
  styleUrl: './ecobee-summer.component.scss'
})
export class EcobeeSummerComponent {
  blogContent: Blog = {
    bannerImage: 'assets/ecobee-banner.webp',
    date:'June 2024 - August 2024',
    title: 'ecobee',
    titleUrl: 'ecobee.com',
    headings: [
      'Hardware Service Bundles',
      'Third Party Device Integration',
      'SCRUM Lead',
      'Co-Op Presentation',
      'Learning Goals'
    ]
  }

  darkMode$: Observable<boolean>
  constructor(darkModeService: DarkModeService) {
     this.darkMode$ = darkModeService.darkMode$;    
   }
 
}
