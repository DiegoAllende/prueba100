import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuotasComponent } from './list-cuotas.component';

describe('ListCuotasComponent', () => {
  let component: ListCuotasComponent;
  let fixture: ComponentFixture<ListCuotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCuotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
