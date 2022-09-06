import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaExitoComponent } from './consulta-exito.component';

describe('ConsultaExitoComponent', () => {
  let component: ConsultaExitoComponent;
  let fixture: ComponentFixture<ConsultaExitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaExitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaExitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
