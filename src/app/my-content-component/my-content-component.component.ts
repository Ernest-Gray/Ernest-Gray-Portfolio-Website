import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-content-component',
  templateUrl: './my-content-component.component.html',
  styleUrls: ['./my-content-component.component.css']
})
export class MyContentComponentComponent implements OnInit {

  educationRoute = "eduRoute";

  constructor() { }

  ngOnInit() {
  }

}
