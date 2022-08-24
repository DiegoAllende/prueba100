import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadNumericoComponent } from './pad-numerico.component';

describe('PadNumericoComponent', () => {
  let component: PadNumericoComponent;
  let fixture: ComponentFixture<PadNumericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadNumericoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadNumericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
