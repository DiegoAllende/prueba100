import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionSegurosComponent } from './informacion-seguros.component';

describe('InformacionSegurosComponent', () => {
  let component: InformacionSegurosComponent;
  let fixture: ComponentFixture<InformacionSegurosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionSegurosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
