import { Component } from '@angular/core';
import { fadeTransitionAnimation } from '../../animations';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
animations: [fadeTransitionAnimation],
}) 
export class BlogComponent {
  darkMode$: Observable<boolean>
  private _router: Router;
  isMobile: boolean;
 constructor(router: Router, darkModeService: DarkModeService, deviceService: DeviceDetectorService) {
    this._router = router;
    this.darkMode$ = darkModeService.darkMode$;    
    this.isMobile = deviceService.isMobile()
  }
}
