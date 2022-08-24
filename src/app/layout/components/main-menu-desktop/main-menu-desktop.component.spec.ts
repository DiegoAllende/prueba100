import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuDesktopComponent } from './main-menu-desktop.component';

describe('MainMenuDesktopComponent', () => {
  let component: MainMenuDesktopComponent;
  let fixture: ComponentFixture<MainMenuDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
