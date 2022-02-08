import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {


  name_and_role: string = "Ernest Gray - Full Stack Developer";


  constructor() { }

  ngOnInit(): void {
  }

}
