import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSegurosMobileComponent } from './list-seguros-mobile.component';

describe('ListSegurosMobileComponent', () => {
  let component: ListSegurosMobileComponent;
  let fixture: ComponentFixture<ListSegurosMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSegurosMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSegurosMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
