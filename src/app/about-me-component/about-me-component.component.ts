import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me-component.component.html',
  styleUrls: ['./about-me-component.component.css'],
})
export class AboutMeComponentComponent implements OnInit {
  aboutMeString: string =
    'Hi, my name is Ernest Gray.  I am currently an undergraduate student at Towson University in the state of Maryland.  I am studying computer science';
  constructor() {}

  ngOnInit() {}
}
