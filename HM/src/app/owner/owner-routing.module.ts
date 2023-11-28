import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLoginComponent } from './owner-login/owner-login.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelRegistrationComponent } from './hotel-registration/hotel-registration.component';

const routes: Routes = [
  { path : "", component : OwnerLoginComponent},
  { path:"ownerSuccess", component: OwnerSuccessComponent},
  { path:"hotelReg",component:HotelRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
