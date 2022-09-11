import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    ]),
    trigger('infoPageDelay', [
      transition(':leave', [
        group ([
          query('@*', [animateChild()]),
          animate(50000),
        ]),
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }


  pagesEnum = Pages
  currentPage = Pages.infoPage 

  infoPageLeave : boolean = false;

  ngOnInit(): void {
  }

  showProjects(): void {
    this.infoPageLeave = true
    // set delay for ngIf to allow animation
    setTimeout(() => (this.currentPage = Pages.projectViewPage), 50)
  }
}
