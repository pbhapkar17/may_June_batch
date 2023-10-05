import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path:'', component:LandingComponent},
  { path: 'PrincipleMod', loadChildren:()=>import ('./principle/principle.module').then(mod=>mod.PrincipleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
