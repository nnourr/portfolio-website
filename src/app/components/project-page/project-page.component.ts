import { Component, OnInit } from '@angular/core';
import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
  animations: [
    trigger('projectPageAnimation', [
      transition(':enter', [
        style({width:'100%', height:'100%', maxWidth:'100%', borderRadius:0, boxShadow:"0 0 0 black"}),
        animate("1000ms 1700ms", style({width:"100%", height:"90vh", maxWidth:'900px', borderRadius:"1rem"})),
      ])
    ]),
    trigger('textAnimation', [
      transition(':enter', [
        style({opacity:0}),
        animate("1000ms 3400ms", style({opacity:1})),
      ])
    ])
  ]
})
export class ProjectPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
