import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [/* Fade In Animation with scaleing in and moving up to the right that goes item by item in the array*/
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(25%) translateX(-5%) scale(90%) rotateY(45deg)'}),
          stagger(250 / 3, [
            animate('500ms', style({ opacity: 1, transform: 'translateY(0%) translateX(0%) scale(100%) rotateY(0deg)'}))
          ])
        ])
      ])
    ])
  ],
})
export class PortfolioComponent implements OnInit {
  array = [
    {
      name: 'Ultimate Bowling VR',
      imageSource: '/assets/Ultamite Bowling Home.PNG',
      imageLink: 'link',
    },
    {
      name: 'World of Warcraft Fishing Bot',
      imageSource: '/assets/WoW Fishing Icon.png',
      imageLink: 'link',
    },
    {
      name: 'TEST REALLY LONG WORD WEEEEEEEEEEEEEEEEEEEE',
      imageSource: '/assets/WoW Fishing Icon.png',
      imageLink: 'link',
    },
  ];

  isOpen = false;
  constructor() {}

  ngOnInit() {}
}
