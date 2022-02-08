import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CourseComponent } from './courses.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { OutsideLinkComponent } from './outside-link/outside-link.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { ContactMeComponentComponent } from './contact-me-component/contact-me-component.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GifComponentComponent } from './gif-component/gif-component.component';
import { BackButtonComponentComponent } from './back-button-component/back-button-component.component';
import { BluePixelParticleGifComponent } from './blue-pixel-particle-gif/blue-pixel-particle-gif.component';

@NgModule({
  declarations: [		
    AppComponent,
    MainHeaderComponent,
    CourseComponent,
    NavigationBarComponent,
    OutsideLinkComponent,
    ContactMeComponentComponent,
    AboutMeComponent,
    PortfolioComponent,
    GifComponentComponent,
      BackButtonComponentComponent,
      BluePixelParticleGifComponent
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
