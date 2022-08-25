import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoExitosoComponent } from './proceso-exitoso.component';

describe('ProcesoExitosoComponent', () => {
  let component: ProcesoExitosoComponent;
  let fixture: ComponentFixture<ProcesoExitosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoExitosoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
