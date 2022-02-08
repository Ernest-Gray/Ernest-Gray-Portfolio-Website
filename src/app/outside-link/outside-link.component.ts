import { Component, Inject, Injectable, OnInit } from '@angular/core';


@Component({
  selector: 'app-outside-link',
  templateUrl: './outside-link.component.html',
  styleUrls: ['./outside-link.component.css']
})
export class OutsideLinkComponent implements OnInit {


  constructor(@Inject(String) private name: string, @Inject(String) private url: string){

  }

  OnButtonClicked(): void{

    console.log("Button Pressed");
  }


  ngOnInit(): void {
  }

}
