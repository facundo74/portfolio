import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselTagsComponent } from './carrousel-tags.component';

describe('CarrouselTagsComponent', () => {
  let component: CarrouselTagsComponent;
  let fixture: ComponentFixture<CarrouselTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselTagsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
