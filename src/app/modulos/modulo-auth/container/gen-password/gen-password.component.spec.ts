import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenPasswordComponent } from './gen-password.component';

describe('GenPasswordComponent', () => {
  let component: GenPasswordComponent;
  let fixture: ComponentFixture<GenPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
