import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftInfoComponent } from './left-info.component';

describe('LeftInfoComponent', () => {
  let component: LeftInfoComponent;
  let fixture: ComponentFixture<LeftInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
