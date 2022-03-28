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
          name: 'Virtual Reality Bowling',
          imageRef: ['/assets/Ultamite Bowling Home.PNG'],
          link: '',
          description: 'My solo developed virtual reality (VR) game contains over 1000 lines of C# code, excellent usage of object-oriented programming, superb documentation, and developed with compatibility for numerous different VR headsets.   Over a year has gone into developing and researching this project. ',
        },
      ],
    },
    {
      fieldName: 'Front-End with Angular Framework',
      content: [
        {
          name: 'Portfolio Website',
          imageRef: [''],
          link: '',
          description: 'This website I created by myself as a learning project to help me better understand what goes into front end development.  I read through the Angular docs and watched many YouTube videos to get started.  I created the entirety of the project in Visual Code.  The project doesn’t contain outside resources like bootstrap, although I did mess around with that content.  This means that everything you are seeing is custom made HTML a CSS styles that was inspired by me.  It may not be the most exciting website in history, but it does serve its purpose; to show the viewew my content and a part of my capacity to learn.',
        },
      ],
    },
    {
      fieldName: 'Unity Tools with C#',
      content: [
        {
          name: 'Voice Action Tool',
          imageRef: [''],
          link: '',
          description: 'A public tool for the Unity Game Engine that allows developers to associate actions to voice lines. GUI was developed using Unity’s UI Toolkit.  Contains over 100 lines of C# code with excellent documentation.',
        },
      ],
    },
    {
      fieldName: 'Python',
      content: [
        {
          name: 'Algorithm Trading with Python',
          imageRef: [''],
          link: '',
          description: 'I created my own software to trade bitcoin and Ethereum cryptocurrencies. This involved a GUI, a back-testing framework for evaluate algorithms, and over a year of research and development.',
        },
      ],
    },
    {
      fieldName: 'Java with Apache Netbeans and Maven',
      content: [
        {
          name: 'Automated Follow-Up Email Sender',
          imageRef: [''],
          link: '',
          description: 'A java application that helps keep track of follow-up emails to jobs.  It helps format the email appropriately and sends them at an appropriate date and time.',
        },
        {
          name: 'World of Warcraft Automated Fishing',
          imageRef: ['/assets/WoW Fishing Icon.png'],
          link: '',
          description: 'An autonomous “bot” to automate the process of fishing in the popular game world of warcraft.  It has a GUI and is multithreaded.',
        },
      ],
    },
  ];

  mainButtonActive = false;

  MainButtonClick(){
    this.mainButtonActive = !this.mainButtonActive!

  }
  currentFieldIndex = 0;
  currentContentIndex = 0;
  OnContentClick(i:any,j:any){

    this.currentFieldIndex = i;
    this.currentContentIndex = j;
  }

}
