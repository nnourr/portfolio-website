import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
  animations :[
    trigger('hide', [
      transition(':leave', [
        animate (700, style({opacity:0, scale:0}))
      ])
    ]),
    trigger('hideImage', [
      transition(':leave', [
        animate (700, style({opacity:0, scale:0, width:0}))
      ])
    ]),
    trigger('removePadding', [
      transition(':leave', [
        animate (700, style({padding:0, margin: 0, width:'100%', height:'100%', maxWidth:'100%', borderRadius:0, boxShadow:'0 0 0 black'}))
      ])
    ]),
    // trigger('makeBlock', [
    //   transition(':leave', [
    //     animate ('500ms $pageTransitionSpeed', style({opacity: 0}))
    //   ])
    // ])
  ]
})
export class InfoPanelComponent implements OnInit {

  @Output() projectEmitter: EventEmitter<null> = new EventEmitter();
  @Input() animationState: string;

  constructor() { }

  mobile : boolean = false;

  openProjects () : void {
    this.projectEmitter.emit()
  }

  ngOnInit(): void {
    

    var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      this.mobile = true;
    }
  }

}
