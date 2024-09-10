import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core"
import { Router } from "@angular/router"
import { DeviceDetectorService } from "ngx-device-detector"
import { Observable, fromEvent } from "rxjs"
import { fadeTransitionAnimation } from "src/app/animations"
import { CurrPage } from "src/app/enums/curr-page"
import { WorkExperienceInfo } from "src/app/models/work-experience-info.model"
import { DarkModeService } from "src/app/services/dark-mode.service"
import { Images, WorkExperience } from "./work-experience.info"

@Component({
  selector: "app-work-experience-page",
  templateUrl: "./work-experience-page.component.html",
  styleUrls: ["./work-experience-page.component.scss"],
  animations: [fadeTransitionAnimation],
})
export class WorkExperiencePageComponent implements OnInit {
  @HostListener("window:popstate", ["$event"])
  onPopState(_event: any) {
    this.goBack()
  }
  @ViewChildren("companies", { read: ElementRef }) companies: QueryList<ElementRef>
  @ViewChild("scrollTarget", { static: true }) scrollTarget: ElementRef

  _router: Router
  darkMode$: Observable<boolean>
  isMobile: boolean
  isVisible$: Observable<boolean>[] = [new Observable(), new Observable(), new Observable(), new Observable()]
  currPage = CurrPage.WorkExperiencePage
  preLoadArr = new Array()
  workExperiences: WorkExperienceInfo[] = WorkExperience
  currentPage = CurrPage.WorkExperiencePage

  constructor(router: Router, darkModeService: DarkModeService, deviceService: DeviceDetectorService) {
    this._router = router
    this.darkMode$ = darkModeService.darkMode$
    this.isMobile = deviceService.isMobile()
  }

  ngOnInit(): void {
    Object.values(Images).forEach((company) => {
      Object.values(company).forEach((image) => {
        this.preLoadArr.push(new Image())
        this.preLoadArr[this.preLoadArr.length - 1].src = image
      })
    })
  }

  ngAfterViewInit(): void {
    if (this.isMobile) {
      this.isVisible$ = this.companies.map((company) => new Observable((observer) => {
        const intersectionObserver: IntersectionObserver = new IntersectionObserver((entries) => {
          observer.next(entries[0].isIntersecting)
        }, {threshold: 0.7})
        intersectionObserver.observe(company.nativeElement)
        return () => {
          intersectionObserver.disconnect()
        }
      }))
    }
  }


  scrollToExperience(index: number) {
    this.companies.get(index)?.nativeElement.scrollIntoView({behavior: 'smooth'})
  }
  
  goBack() {
    this._router.navigate(["/home"], { queryParams: { showAnimation: false } })
  }
}
