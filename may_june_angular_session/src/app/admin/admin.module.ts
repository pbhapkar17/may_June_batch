import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { Landing2Component } from './landing2/landing2.component';
console.log('admin mod..');


@NgModule({
  declarations: [
    AdminLandingComponent,
    Landing2Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
