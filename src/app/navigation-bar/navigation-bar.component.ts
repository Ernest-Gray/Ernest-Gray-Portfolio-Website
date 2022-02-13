import { ContactMeService } from './../contact-me.service';
import { Component, OnInit } from '@angular/core';
import { GetIsMobileService } from './../get-isMobile.service';

@Component({
  selector: 'NavigationBar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent {
  array = [
    {
      name: 'Github',
      url: 'https://github.com/Ernest-Gray',
      imageSource: '/assets/githubIcon.png',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ernest-gray-a877a9100',
      imageSource: '/assets/LinkedInIcon.png',
    },
    {
      name: 'Contact Me',
      url: '',
      imageSource: '',
    },
  ];
  constructor(public GetIsMobileService: GetIsMobileService, public ContactMeService: ContactMeService) {

  }

  OpenContactPage(){

  }

  OnClick(item: any): void {
    console.log('Clicked: ' + item);
  }
}
