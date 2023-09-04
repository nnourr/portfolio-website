import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.scss']
})
export class InProgressComponent implements OnInit {

  darkMode$: Observable<boolean>

  constructor(darkModeService: DarkModeService) {
    this.darkMode$ = darkModeService.darkMode$;
  }
  @Input() fullPage?: boolean = true;

  ngOnInit(): void {
    // let options: TypedOptions = {
    //   stringsElement: '#typed-text',
    //   typeSpeed: 40,
    //   backSpeed: 30,
    //   showCursor: false,
    //   backDelay: 2000,
    //   loop: true
    // };
    
    // let typed = new Typed('#typed', options);
  }

}