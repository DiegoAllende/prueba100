import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoLuzComponent } from './pago-luz.component';

describe('PagoLuzComponent', () => {
  let component: PagoLuzComponent;
  let fixture: ComponentFixture<PagoLuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoLuzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
