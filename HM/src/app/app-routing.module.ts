import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './commonScreens/landing/landing.component';
import { OwnerSigUpComponent } from './owner/owner-sig-up/owner-sig-up.component';


const routes: Routes = [
  { path : "", component: LandingComponent},
  { path:"signUp", component:OwnerSigUpComponent},
  { path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  { path:'owner',loadChildren:()=>import('./owner/owner.module').then(mod=>mod.OwnerModule)},
  { path:'user',loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
