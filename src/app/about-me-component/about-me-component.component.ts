import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me-component.component.html',
  styleUrls: ['./about-me-component.component.css'],
})
export class AboutMeComponentComponent implements OnInit {
  aboutMeString: string =
    'Hi, my name is Ernest Gray.  I am a undergraduate student at Towson University studying Computer Science.  I have a passion for learning and an aptitude for problem solving.  I spend my spare time working on personal projects, such as a few shown in my portfolio page, and now and again playing multiplayer videogames with close friends of mine.  When I’m not at my computer or at school I’m spending time with my wonderful and beautiful wife Emily; I love her more than any computer, and that’s saying a lot from a computer scientist!  She encourages me in my projects and learning and inspires me to keep learning and growing personally.';
  constructor() {}

  ngOnInit() {}
}
