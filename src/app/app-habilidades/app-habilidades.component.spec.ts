import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHabilidadesComponent } from './app-habilidades.component';

describe('AppHabilidadesComponent', () => {
  let component: AppHabilidadesComponent;
  let fixture: ComponentFixture<AppHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHabilidadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
