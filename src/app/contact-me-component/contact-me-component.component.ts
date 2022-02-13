import { GetIsMobileService } from './../get-isMobile.service';
import { ContactMeService } from './../contact-me.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me-component',
  templateUrl: './contact-me-component.component.html',
  styleUrls: ['./contact-me-component.component.css']
})
export class ContactMeComponentComponent implements OnInit {

  constructor(public ContactMeService: ContactMeService, public GetIsMobileService: GetIsMobileService) { }

  ngOnInit() {
  }

  OnClick(): void{

    console.log("Hit Button: " + this);
  }

}
