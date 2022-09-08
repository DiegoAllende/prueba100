import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioClaveTemporalComponent } from './cambio-clave-temporal.component';

describe('CambioClaveTemporalComponent', () => {
  let component: CambioClaveTemporalComponent;
  let fixture: ComponentFixture<CambioClaveTemporalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioClaveTemporalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioClaveTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
