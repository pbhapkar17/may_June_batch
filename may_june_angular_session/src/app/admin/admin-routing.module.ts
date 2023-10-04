import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { Landing2Component } from './landing2/landing2.component';

const routes: Routes = [
  {path:'adminLanding',component:AdminLandingComponent},
  { path:'lan2',component:Landing2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
