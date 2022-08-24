import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMenuDesktopComponent } from './item-menu-desktop.component';

describe('ItemMenuDesktopComponent', () => {
  let component: ItemMenuDesktopComponent;
  let fixture: ComponentFixture<ItemMenuDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMenuDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMenuDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
