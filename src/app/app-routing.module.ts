import { AboutMeComponentComponent } from './about-me-component/about-me-component.component';
import { EducationComponent } from './education/education.component';
import { ExpirienceComponent } from './expirience/expirience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animation: 'portfolio' },
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { animation: 'portfolio' },
  },
  {
    path: 'expirience',
    component: ExpirienceComponent,
    data: { animation: 'portfolio' },
  },
  {
    path: 'aboutMe',
    component: AboutMeComponentComponent,
    data: { animation: 'aboutMe' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
