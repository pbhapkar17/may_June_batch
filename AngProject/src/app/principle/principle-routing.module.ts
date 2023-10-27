import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipalSignUpComponent } from './principal-sign-up/principal-sign-up.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';
import { PrincipalsuccessComponent } from './principalsuccess/principalsuccess.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  { path:'principleHome', component : PrincipleHomeComponent},
  { path: 'signUp', component : PrincipalSignUpComponent},
  { path:'login', component:PrincipalLoginComponent},
  { path:'PrincipalSuccess', component :PrincipalsuccessComponent},
  { path :'directives',component:DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipleRoutingModule { }
