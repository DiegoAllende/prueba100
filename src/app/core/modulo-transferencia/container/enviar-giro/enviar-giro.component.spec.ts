import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarGiroComponent } from './enviar-giro.component';

describe('EnviarGiroComponent', () => {
  let component: EnviarGiroComponent;
  let fixture: ComponentFixture<EnviarGiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarGiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarGiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
