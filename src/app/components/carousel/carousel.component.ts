import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { DarkModeService } from '../../services/dark-mode.service';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() images: string[]

  currentIndex = new BehaviorSubject(0)
  currentIndexSubscription: Subscription
  
  scrollImageTo(index: number) {
    const imageToScrollTo = document.getElementById("image" + index)
    if (!!imageToScrollTo) {
      imageToScrollTo.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  faChevronLeft = faChevronLeft
  faChevronRight = faChevronRight
  
  darkMode$: Observable<boolean>
  constructor(darkModeService: DarkModeService) {
     this.darkMode$ = darkModeService.darkMode$;    
   }

  nextImage() {
    this.currentIndex.next(Math.min(this.currentIndex.getValue() + 1, this.images.length-1))
  }

  prevImage() {
    this.currentIndex.next(Math.max(this.currentIndex.getValue() - 1, 0))
  }

  ngOnInit(): void {
    this.currentIndexSubscription = this.currentIndex.subscribe({
      next: (index) => this.scrollImageTo(index),
    });
  }
  ngOnDestroy(): void {
    this.currentIndexSubscription.unsubscribe()
  }
}
