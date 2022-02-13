import { ContactMeService } from './contact-me.service';
import { Component, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(public ContactMeService: ContactMeService){

  }
  title="Ernest-Gray"
}
