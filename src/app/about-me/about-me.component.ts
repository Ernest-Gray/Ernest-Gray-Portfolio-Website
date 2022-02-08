import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [
    trigger('fadeIn', [
      state('start', style({ opacity: '0' })),
      state('end', style({ opacity: '1' })),
      transition('start => end', animate('500ms')),

      transition(':enter', [
        style({ opacity: 0, transform: 'rotateX(90deg)' }),
        animate('500ms ease-in', style({ opacity: 1, transform: 'rotateY(0deg) rotateY(0deg)' })),
      ]),
    ]),
  ],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
