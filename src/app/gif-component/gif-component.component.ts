import { Component, Inject, OnInit, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-gif-component',
  templateUrl: './gif-component.component.html',
  styleUrls: ['./gif-component.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class GifComponentComponent implements OnInit {

  constructor(@Inject('imageSource') private imageSource: string) { }

  @Input() image: any;

  public getImageSource(): string{
    return this.imageSource;
  }

  ngOnInit() {
  }

}
