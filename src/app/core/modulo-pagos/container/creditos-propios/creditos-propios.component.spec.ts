import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosPropiosComponent } from './creditos-propios.component';

describe('CreditosPropiosComponent', () => {
  let component: CreditosPropiosComponent;
  let fixture: ComponentFixture<CreditosPropiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditosPropiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosPropiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
