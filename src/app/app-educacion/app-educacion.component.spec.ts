import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEducacionComponent } from './app-educacion.component';

describe('AppEducacionComponent', () => {
  let component: AppEducacionComponent;
  let fixture: ComponentFixture<AppEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEducacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
