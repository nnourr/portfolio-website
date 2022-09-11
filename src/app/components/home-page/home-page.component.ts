import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Pages } from 'src/environments/constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger ('fadeIn', [
      transition('void => *',[
        style({opacity : 0, transform: 'translate({{yDirection}}px, 50px) scale(0.9)'}),
        animate("{{delay}}ms 2000ms ease-in", style ({}))
      ], {params: {yDirection: "0", delay: "1250"}})
    ])
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  pagesEnum = Pages
  currentPage = Pages.infoPage 

  ngOnInit(): void {
  }

  showProjects(): void {
    this.currentPage = Pages.projectViewPage
  }
}
