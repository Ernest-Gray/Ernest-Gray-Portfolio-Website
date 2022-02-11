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
  selector: 'app-expirience',
  templateUrl: './expirience.component.html',
  styleUrls: ['./expirience.component.css'],
  animations: [/* Fade In Animation with scaleing in and moving up to the right that goes item by item in the array*/

  ],
})

export class ExpirienceComponent implements OnInit {
  itemsArray = [
    {
      name: 'Outback Steakhouse',
      content:
        'I have been working at outback steakhouse for the past 4 years to help pay for college.',
    },
    {
      name: 'MyGym',
      content:
        'I taught kids gymnastics from a set program.  I also had a sales pitch and had to interact with the parents to get signups.  The job required working in a fast moving and hectic enviorment that really enphasized patience.',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
