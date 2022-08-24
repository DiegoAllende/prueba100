import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasLayoutComponent } from './consultas-layout.component';

describe('ConsultasLayoutComponent', () => {
  let component: ConsultasLayoutComponent;
  let fixture: ComponentFixture<ConsultasLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
