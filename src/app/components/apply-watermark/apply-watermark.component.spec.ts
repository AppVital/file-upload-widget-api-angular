import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyWatermarkComponent } from './apply-watermark.component';

describe('ApplyWatermarkComponent', () => {
  let component: ApplyWatermarkComponent;
  let fixture: ComponentFixture<ApplyWatermarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyWatermarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyWatermarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
