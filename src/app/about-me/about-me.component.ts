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
  // animations: [
  //   trigger('fadeIn', [
  //     transition('* <=> *', [
  //       style({transform: 'translateX(-110%) scale(90%)'}),
  //       animate('250ms', style({transform: 'translateX(0%) scale(100%)'})),
  //       animate('100ms ease-out', style({transform: 'translateX(0.5%)'})),
  //       animate('100ms ease', style({transform: 'translateX(-0.5%)'})),
  //       animate('100ms ease', style({transform: 'translateX(0%)'})),
  //     ]),
  //   ]),
  // ],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
