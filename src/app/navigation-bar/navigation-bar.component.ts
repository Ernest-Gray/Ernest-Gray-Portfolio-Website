import { OutsideLinkComponent } from './../outside-link/outside-link.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'NavigationBar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  array = [
    {
      name: 'Github',
      url: 'https://github.com/Valorak56',
      imageSource: '/assets/githubIcon.png',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ernest-gray-a877a9100/',
      imageSource: '/assets/LinkedInIcon.png',
    },
    {
      name: 'Contact Me',
      url: '',
      imageSource: '',
    },
  ];

  OnClick(item: any): void {
    console.log('Clicked: ' + item);
  }

  ngOnInit(): void {}
}
