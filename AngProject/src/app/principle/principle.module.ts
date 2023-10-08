import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipleRoutingModule } from './principle-routing.module';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';
import { PrincipalSignUpComponent } from './principal-sign-up/principal-sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
console.log('princi');


@NgModule({
  declarations: [
    PrincipleHomeComponent,
    PrincipalLoginComponent,
    PrincipalSignUpComponent
  ],
  
  imports: [
    CommonModule,
    PrincipleRoutingModule,
    ReactiveFormsModule
    
  ]
})
export class PrincipleModule { }
