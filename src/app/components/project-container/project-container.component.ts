import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
  @Input() highlight$: boolean;

  expanded = new BehaviorSubject<boolean>(false)
  
  open () {
    this.expanded.next(true)
  }
  
  close () {
    this.expanded.next(false)
  }
  
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  
  constructor() {
  }
}
