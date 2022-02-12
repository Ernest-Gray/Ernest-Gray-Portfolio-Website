import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetIsMobileService {
  isMobile = false;
  mobileSize: number = 760;

  getIsMobile(width: number): boolean {
    return document.body.offsetWidth < width;
  }

  constructor() {
    this.isMobile = this.getIsMobile(this.mobileSize);
    window.onresize = () => {
      this.isMobile = this.getIsMobile(this.mobileSize);
    };
  }
}
