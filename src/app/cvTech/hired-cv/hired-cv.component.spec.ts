import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiredCvComponent } from './hired-cv.component';

describe('HiredCvComponent', () => {
  let component: HiredCvComponent;
  let fixture: ComponentFixture<HiredCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiredCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiredCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
