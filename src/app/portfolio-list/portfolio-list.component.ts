import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css'],
})
export class PortfolioListComponent implements OnInit {

  content = [
    { fieldName: 'VR', content: [{ name: 'VR-Extreme-Bowling', imageRef: "/assets/Ultamite Bowling Home.PNG" }] },
    { fieldName: 'Front-End', content: [{ name: 'This Website', imageRef: "" }] },
    { fieldName: 'Misc', content: [{name: 'World of Warcraft Autonamous Fishing', imageRef: "/assets/WoW Fishing Icon.png" }] },
    { fieldName: 'test', content: [{name: 'test1', imageRef: "" }, {name: 'test2', imageRef: "" }, {name: 'test3', imageRef: "" }] },
  ];


  isMobile = false;

  getIsMobile(): boolean{
    return document.body.offsetWidth < 1024;
  }

  constructor() {}

  viewIndex = 0;
  changeView(index: any) {
    this.viewIndex = index;
  }
  ngOnInit() {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }
}
