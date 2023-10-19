import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipalSignUpComponent } from './principal-sign-up/principal-sign-up.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';

const routes: Routes = [
  { path:'principleHome', component : PrincipleHomeComponent},
  { path: 'signUp', component : PrincipalSignUpComponent},
  { path:'login', component:PrincipalLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipleRoutingModule { }
