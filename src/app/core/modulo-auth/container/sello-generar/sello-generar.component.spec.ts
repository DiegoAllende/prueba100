import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelloGenerarComponent } from './sello-generar.component';

describe('SelloGenerarComponent', () => {
  let component: SelloGenerarComponent;
  let fixture: ComponentFixture<SelloGenerarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelloGenerarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelloGenerarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
