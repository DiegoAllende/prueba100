import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconEstrellaDelgadaComponent } from './icon-estrella-delgada.component';

describe('IconEstrellaDelgadaComponent', () => {
  let component: IconEstrellaDelgadaComponent;
  let fixture: ComponentFixture<IconEstrellaDelgadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconEstrellaDelgadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconEstrellaDelgadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
