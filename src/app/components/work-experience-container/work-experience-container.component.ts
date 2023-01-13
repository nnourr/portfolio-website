import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperienceInfo } from 'src/app/models/work-experience-info.model';

@Component({
  selector: 'app-work-experience-container',
  templateUrl: './work-experience-container.component.html',
  styleUrls: ['./work-experience-container.component.scss']
})
export class WorkExperienceContainerComponent implements OnInit {

  @ViewChild('detailComponent') detailComponent: ElementRef;

  @Input() darkMode$: Observable<boolean>;
  @Input() experienceInfo: WorkExperienceInfo;

  showDetails: boolean = false;
  referenceHref: string;

  constructor() { }

  ngOnInit(): void {
    if (this.experienceInfo.reference) {
      this.referenceHref = "mailto:" + this.experienceInfo.reference;
    }
  }

  detailClick(event: Event) {
    if (!event.composedPath().includes(this.detailComponent.nativeElement)) {
      this.closeDetails();
    }
  }

  openDetails() {
    this.showDetails = true;
  }
  closeDetails() {
    this.showDetails = false;
  }

}
