import { Component, Input } from '@angular/core';
import { fadeTransitionAnimation } from '../../animations';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';
import {Location} from '@angular/common';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
animations: [fadeTransitionAnimation],
}) 
export class BlogComponent {
  darkMode$: Observable<boolean>
  isMobile: boolean;
  @Input() blogContent: Blog;
  @Input() imageStyle?: string;

 constructor(darkModeService: DarkModeService, deviceService: DeviceDetectorService, private _location: Location) {
    this.darkMode$ = darkModeService.darkMode$;    
    this.isMobile = deviceService.isMobile()
  }

  scrollToHeader(heading: string) {
    const headingElem = document.getElementById(heading)
    if (!!headingElem) {
      headingElem.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  goBack() {
   this._location.back() 
  }
}
