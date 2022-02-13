import { GetIsMobileService } from './../get-isMobile.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css'],
})
export class PortfolioListComponent {
  content = [
    {
      fieldName: 'VR',
      content: [
        {
          name: 'VR-Extreme-Bowling',
          imageRef: '/assets/Ultamite Bowling Home.PNG',
          link: '',
          description: 'VR Bowling',
        },
        {
          name: 'VR-Extreme-Bowling',
          imageRef: '/assets/Ultamite Bowling Home.PNG',
          link: '',
          description: 'VR Bowling',
        },
        {
          name: 'VR-Extreme-Bowling',
          imageRef: '/assets/Ultamite Bowling Home.PNG',
          link: '',
          description: 'VR Bowling',
        },
        {
          name: 'VR-Extreme-Bowling',
          imageRef: '/assets/Ultamite Bowling Home.PNG',
          link: '',
          description: 'VR Bowling',
        },
      ],
    },
    {
      fieldName: 'Front-End',
      content: [
        {
          name: 'This Website',
          imageRef: '',
          link: '',
          description: 'I created this website',
        },
      ],
    },
    {
      fieldName: 'Misc',
      content: [
        {
          name: 'World of Warcraft Autonamous Fishing',
          imageRef: '/assets/WoW Fishing Icon.png',
          link: '',
          description: 'A Fishing Bot for the popular game World of Warcraft',
        },
      ],
    },
    // { fieldName: 'test', content: [{name: 'test1', imageRef: "" }, {name: 'test2', imageRef: "" }, {name: 'test3', imageRef: "" }] },
  ];

  constructor(public GetIsMobileService: GetIsMobileService) {}

  viewIndex = 0;
  changeView(index: any) {
    this.viewIndex = index;
  }
}
