import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExperienciasComponent } from './app-experiencias.component';

describe('AppExperienciasComponent', () => {
  let component: AppExperienciasComponent;
  let fixture: ComponentFixture<AppExperienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppExperienciasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
