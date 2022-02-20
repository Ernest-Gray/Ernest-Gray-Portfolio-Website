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
          imageRef: ['/assets/Ultamite Bowling Home.PNG'],
          link: '',
          description: 'VR Extreme Bowling, a working name, is a side project I\' made during school.  It features a fully playable bowling alley with special features to make bowling a bit more ‘extreme’ such as power ups.  I plan to include other mini games such as arcade games and arcade like basketball hoops.  I also plan to add a full bar to the bowling alley which will give the player the option to interact with more objects and immersive themselves in the experience.  These ideas are just the tip of the iceberg; I eventually want to make the game have a large array of features that make the game a shining example of what VR can do.',
        },
      ],
    },
    {
      fieldName: 'Front-End',
      content: [
        {
          name: 'My Portfolio Website',
          imageRef: [''],
          link: '',
          description: 'This website I created by myself as a learning project to help me better understand what goes into front end development.  I read through the Angular docs and watched many YouTube videos to get started.  I created the entirety of the project in Visual Code.  The project doesn’t contain outside resources like bootstrap, although I did mess around with that content.  This means that everything you are seeing is custom made HTML a CSS styles that was inspired by me.  It may not be the most exciting website in history, but it does serve its purpose; to show the viewew my content and a part of my capacity to learn.',
        },
      ],
    },
    {
      fieldName: 'Automation',
      content: [
        {
          name: 'World of Warcraft Automated Fishing',
          imageRef: ['/assets/WoW Fishing Icon.png'],
          link: '',
          description: 'World of warcraft has always been one of my favorite video games.  I started playing back in 2010 when the ‘Wrath of the Lich King’ expansion came out.  Since then, I’ve played on and off but was very excited to hear that the game was re-releasing the original expansion “World of Warcraft: Classic”.  This new branch was very competitive and required a decent amount of time to build up resources to do the end game content.  An interesting way to get resources and wealth in the game is through fishing.  The mini game of fishing consists of pressing a button to throw a bobber, waiting until the bobber sinks and plays a noise, and finally right clicking the bobber.  This is how you catch fish in the game.  It isn’t the most exciting mini game; but it does generate in-game wealth.  Thus, I started planning a way to automate the process.  I created the project in java and used the basic GUI elements provided with it.  I did do some research onto how others have previously tackled the idea and that gave me some starting points.  The first part of the program is to detect where the bobber is on the screen.  I did this through a series of scans and comparing colors to a known color of the bobber; I had to adjust the threshold for the color acceptance criteria but in the end, I got very satisfying results.  After finding the bobber the program requires the scanning of the volume mixer for indications of when the bobber drop sound is played.  When the program detects the volume has spiked up, it will trigger the simulated right-click maneuver.  Then a series of keybinds fires off to rethrow the bobber into the water.  This all happens with time synchronization and randomization, so the in-game character doesn’t look like it is a robot who is perfectly railing in the fish every x number of seconds.  Finally, the program will exit itself after a predetermined time.  So, in the end I had an automated fishing program that would scan and find the location of the bobber, take input for the volume mixer location, simulate a right click to catch the fish, and in the end close itself after a set amount of time.  The project made my character a lot of in-game wealth and the project was an excellent way for me to learn some new techniques to gather information.',
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
