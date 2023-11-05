import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectLandingComponent } from './subject-landing/subject-landing.component';
import { Subject1Component } from './subject1/subject1.component';
import { Subject2Component } from './subject2/subject2.component';

const routes: Routes = [
  { path:'sujectLanding', component:SubjectLandingComponent},
  { path:'suject1', component:Subject1Component},
  { path:'suject2', component:Subject2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
