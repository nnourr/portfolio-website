import { Component } from '@angular/core';

import { fadeTransitionAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fadeTransitionAnimation
  ]
})
export class AppComponent {
  title = 'protfolio-website';
}
