import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignupComponent } from './signup/signup.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserLoginComponent,
    SignupComponent,
    HotelbookingComponent,
    UserSuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
