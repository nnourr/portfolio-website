import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExperienceInfo } from 'src/app/models/work-experience-info.model';

@Component({
  selector: 'app-work-experience-container',
  templateUrl: './work-experience-container.component.html',
  styleUrls: ['./work-experience-container.component.scss']
})
export class WorkExperienceContainerComponent implements OnInit {

  @Input() darkMode$: Observable<boolean>;
  @Input() experienceInfo: WorkExperienceInfo;

  showDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openDetails() {
    this.showDetails = true;
  }
  closeDetails() {
    this.showDetails = false;
  }

}
