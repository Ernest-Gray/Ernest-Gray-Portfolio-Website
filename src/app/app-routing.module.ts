import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { AboutMeComponentComponent } from './about-me-component/about-me-component.component';
import { EducationComponent } from './education/education.component';
import { ExpirienceComponent } from './expirience/expirience.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portfolio-list',
    component: PortfolioListComponent,
    data: { animation: 'portfolio-list' },
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { animation: 'education' },
  },
  {
    path: 'expirience',
    component: ExpirienceComponent,
    data: { animation: 'expirience' },
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
