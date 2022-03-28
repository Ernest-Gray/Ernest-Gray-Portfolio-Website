import { GetIsMobileService } from './../get-isMobile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  array = [
    {
      name: 'Towson University',
      notes: ["Bachelors Degree in Computer Science"],
      description:
        'Where I currently am enrolled.  I am an undergraduate studying computer science and plan to graduate in the spring of 2023',
    },
    {
      name: 'Harford Community College',
      notes: ["Associates Degree in Computer Science", "Associates Degree in Information Technology"],
      description:
        'Graduated in spring of 2022. I achieved a degree in both computer science and information-technology',
    },
    {
      name: 'Unity Game Engine',
      notes: ["C#", "UI", "Game-Design"],
      description:
        'Through countless hours on youtube, stack-exchange, Udemy, and just messing around; I have created various small projects in Unity.  I focusused mainly on creating procedural generative tools and intend to finish some projects over the next few years.  I have become quite apt in C# because of my extensive use of unity.',
    },
    {
      name: 'Python and Algorithm Trading',
      notes: ["Python", "Crypto-Currencies", "Algorithms"],
      description:
        'During some free time during the summer of 2021 I decided to start looking into investing.  Knowing how to program already I immediately wanted to try to automate the trading process.  After much reading about the subject I decided to start my attempt using python.  Having expirience in python from school, I started designing my back-testing software.  While I only ever used it for trading fake money, otherwise called "paper-money", I did create a few algorithms that had positive returns.',
    },
  ];
  constructor(public GetIsMobileService: GetIsMobileService) {}

  ngOnInit() {}
}
