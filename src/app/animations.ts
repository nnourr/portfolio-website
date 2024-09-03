import { trigger, transition, style, query, animateChild, group, animate } from "@angular/animations";

export const fadeTransitionAnimation =
  trigger('fadeTransitionAnimation',  [
    transition('* <=> *', [
        animateChild(),
        style({ opacity: 0}),
        animate('300ms 0ms ease-in', style({ opacity: 1 }))
    ])
  ]);
  