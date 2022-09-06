import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarLayoutComponent } from './generar-layout.component';

describe('GenerarLayoutComponent', () => {
  let component: GenerarLayoutComponent;
  let fixture: ComponentFixture<GenerarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
