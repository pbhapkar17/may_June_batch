import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';
import { SharedModule } from '../shared.module';

console.log('owner');

@NgModule({
  declarations: [
    OwnerSuccessComponent,
    HotelRegistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
