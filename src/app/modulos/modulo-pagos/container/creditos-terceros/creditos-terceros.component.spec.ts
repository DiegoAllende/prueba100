import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditosTercerosComponent } from './creditos-terceros.component';

describe('CreditosTercerosComponent', () => {
  let component: CreditosTercerosComponent;
  let fixture: ComponentFixture<CreditosTercerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditosTercerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditosTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
