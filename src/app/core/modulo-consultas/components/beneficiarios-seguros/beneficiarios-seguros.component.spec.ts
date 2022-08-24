import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiariosSegurosComponent } from './beneficiarios-seguros.component';

describe('BeneficiariosSegurosComponent', () => {
  let component: BeneficiariosSegurosComponent;
  let fixture: ComponentFixture<BeneficiariosSegurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficiariosSegurosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariosSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
