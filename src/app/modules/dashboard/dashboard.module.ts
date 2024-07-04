import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module ';
import { ColorPickerModule } from 'ngx-color-picker';


import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SecondHeaderComponent } from './components/second-header/second-header.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProsyncHomeComponent } from './components/prosync-demo/prosync-home/prosync-home.component';
import { GtinsListComponent } from './components/prosync-demo/gtins-list/gtins-list.component';


@NgModule({
  declarations: [
   LandingPageComponent,
   SecondHeaderComponent,
   SideBarComponent,
   ProsyncHomeComponent,
   GtinsListComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    SharedModule,
    MaterialModule,
    ColorPickerModule 
  ]
})
export class DashboardModule {}
