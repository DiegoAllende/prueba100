import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoAguaComponent } from './pago-agua.component';

describe('PagoAguaComponent', () => {
  let component: PagoAguaComponent;
  let fixture: ComponentFixture<PagoAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
