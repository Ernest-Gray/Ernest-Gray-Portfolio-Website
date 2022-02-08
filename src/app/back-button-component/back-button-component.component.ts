import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button-component',
  templateUrl: './back-button-component.component.html',
  styleUrls: ['./back-button-component.component.css']
})
export class BackButtonComponentComponent implements OnInit {

  constructor() { }

  backButtonVisable = false;

  ngOnInit() {
  }

}
