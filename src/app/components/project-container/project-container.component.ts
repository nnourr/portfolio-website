import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectContainer } from 'src/app/models/project-container.model';

@Component({
  selector: 'app-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.scss']
})
export class ProjectContainerComponent {

  @Input() project: ProjectContainer;
  @Input() reverse: boolean;
  @Input() darkMode$: Observable<boolean>;
  @Input() highlight$: any;

  expanded = false
  
  open () {
    this.expanded = true
  }
  
  close () {
    this.expanded = false
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  
  constructor() { }
}
