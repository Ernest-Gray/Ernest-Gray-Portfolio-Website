import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  array = [
    {
      name: 'Harford Community College',
      description:
        'I achieved my 2 year degree in both computer science and information technology',
    },
    {
      name: 'Towson University',
      description:
        'Where I currently am enrolled.  I am an undergraduate studying computer science and plan to graduate in the spring of 2023',
    },
    {
      name: 'High School',
      description:
        'I was homeschooled my whole pre-college life.  My mother taught me and in my mid-teens I started to learn through online courses.  Durring this entire time I participated in numerous co-operative education opportunities which allowed me to socialize with lots of other homeschoolers.',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
