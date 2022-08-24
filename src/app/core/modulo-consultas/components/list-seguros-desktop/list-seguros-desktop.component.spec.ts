import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSegurosDesktopComponent } from './list-seguros-desktop.component';

describe('ListSegurosDesktopComponent', () => {
  let component: ListSegurosDesktopComponent;
  let fixture: ComponentFixture<ListSegurosDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSegurosDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSegurosDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
