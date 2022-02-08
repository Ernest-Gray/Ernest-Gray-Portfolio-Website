import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideLinkComponent } from './outside-link.component';

describe('OutsideLinkComponent', () => {
  let component: OutsideLinkComponent;
  let fixture: ComponentFixture<OutsideLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutsideLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
