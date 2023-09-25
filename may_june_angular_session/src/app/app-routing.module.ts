import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AddCircleComponent } from './add-circle/add-circle.component';


const routes: Routes = [
  {path : '' , component: LandingComponent},
  { path: 'home', component : HomeComponent},
  { path : 'addCircle', component : AddCircleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
