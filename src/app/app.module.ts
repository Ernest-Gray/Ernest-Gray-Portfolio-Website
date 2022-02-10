import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { ContactMeComponentComponent } from './contact-me-component/contact-me-component.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponentComponent } from './about-me-component/about-me-component.component';
import { MyContentComponentComponent } from './my-content-component/my-content-component.component';
import { EducationComponent } from './education/education.component';
import { ExpirienceComponent } from './expirience/expirience.component';
import { ContentButtonsComponent } from './content-buttons/content-buttons.component';

@NgModule({
  declarations: [			
    AppComponent,
    CourseComponent,
    NavigationBarComponent,
    ContactMeComponentComponent,
    PortfolioComponent,
      AboutMeComponentComponent,
      MyContentComponentComponent,
      EducationComponent,
      ExpirienceComponent,
      ContentButtonsComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
