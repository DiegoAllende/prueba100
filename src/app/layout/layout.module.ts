import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainLayoutComponent } from './container/main-layout/main-layout.component';
import {SharedModule} from "../shared/shared.module";
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainMenuDesktopComponent } from './components/main-menu-desktop/main-menu-desktop.component';
import { ItemMenuDesktopComponent } from './components/main-menu-desktop/item-menu-desktop/item-menu-desktop.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    MainHeaderComponent,
    MainMenuDesktopComponent,
    ItemMenuDesktopComponent
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        SharedModule,
    ]
})
export class LayoutModule { }
