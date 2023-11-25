import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerSigUpComponent } from './owner-sig-up/owner-sig-up.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';


@NgModule({
  declarations: [
    OwnerLoginComponent,
    OwnerSigUpComponent,
    HotelRegistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
