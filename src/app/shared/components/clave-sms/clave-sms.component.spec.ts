import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveSmsComponent } from './clave-sms.component';

describe('ClaveSmsComponent', () => {
  let component: ClaveSmsComponent;
  let fixture: ComponentFixture<ClaveSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaveSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaveSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
