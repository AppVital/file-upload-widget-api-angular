import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateThumbnailsComponent } from './generate-thumbnails.component';

describe('GenerateThumbnailsComponent', () => {
  let component: GenerateThumbnailsComponent;
  let fixture: ComponentFixture<GenerateThumbnailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateThumbnailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateThumbnailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
