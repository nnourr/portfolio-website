import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPanelComponent implements OnInit {

  @Output() projectEmitter: EventEmitter<null> = new EventEmitter();

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
