import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargasCelularComponent } from './recargas-celular.component';

describe('RecargasCelularComponent', () => {
  let component: RecargasCelularComponent;
  let fixture: ComponentFixture<RecargasCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecargasCelularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecargasCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
