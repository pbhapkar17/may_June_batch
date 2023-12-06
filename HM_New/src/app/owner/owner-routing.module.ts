import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';

const routes: Routes = [
  { path : "ownerSuccess",component:OwnerSuccessComponent},
  { path : "hotelRegistration",component:HotelRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
