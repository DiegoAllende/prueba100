import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesRetencionesComponent } from './cheques-retenciones.component';

describe('ChequesRetencionesComponent', () => {
  let component: ChequesRetencionesComponent;
  let fixture: ComponentFixture<ChequesRetencionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesRetencionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesRetencionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
