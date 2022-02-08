/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BluePixelParticleGifComponent } from './blue-pixel-particle-gif.component';

describe('BluePixelParticleGifComponent', () => {
  let component: BluePixelParticleGifComponent;
  let fixture: ComponentFixture<BluePixelParticleGifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluePixelParticleGifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluePixelParticleGifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
