import { trigger, transition, style, query, animateChild, group, animate } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
    query(':enter', [
        style({ opacity: '100%' })
    ], { optional: true }),
    query(':leave', [
        style({ opacity: '0' })
    ], { optional: true }),
    //   query(':leave', animateChild(), { optional: true }),
    //   group([
    //     query(':leave', [
    //       animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
    //     ], { optional: true }),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ], { optional: true }),
    //     query('@*', animateChild(), { optional: true })
    //   ]),
    ])
  ]);