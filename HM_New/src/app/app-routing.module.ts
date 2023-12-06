import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path : "login", component: LoginComponent},
  { path:'owner',loadChildren:()=>import('./owner/owner.module').then(mod=>mod.OwnerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
