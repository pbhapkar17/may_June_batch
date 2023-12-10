import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';

const routes: Routes = [
  { path : "", component : UserLoginComponent},
  { path: "hotelBooking", component:HotelbookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
