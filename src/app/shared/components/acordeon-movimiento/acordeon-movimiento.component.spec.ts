import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonMovimientoComponent } from './acordeon-movimiento.component';

describe('AcordeonMovimientoComponent', () => {
  let component: AcordeonMovimientoComponent;
  let fixture: ComponentFixture<AcordeonMovimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcordeonMovimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordeonMovimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
