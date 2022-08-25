import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSegundoPasoComponent } from './card-segundo-paso.component';

describe('CardSegundoPasoComponent', () => {
  let component: CardSegundoPasoComponent;
  let fixture: ComponentFixture<CardSegundoPasoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSegundoPasoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSegundoPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
