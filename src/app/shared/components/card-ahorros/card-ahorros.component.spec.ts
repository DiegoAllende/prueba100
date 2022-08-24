import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAhorrosComponent } from './card-ahorros.component';

describe('CardAhorrosComponent', () => {
  let component: CardAhorrosComponent;
  let fixture: ComponentFixture<CardAhorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAhorrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAhorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
