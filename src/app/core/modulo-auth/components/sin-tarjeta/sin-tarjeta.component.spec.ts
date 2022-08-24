import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinTarjetaComponent } from './sin-tarjeta.component';

describe('SinTarjetaComponent', () => {
  let component: SinTarjetaComponent;
  let fixture: ComponentFixture<SinTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
