import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { TableComponent } from './pipes/table/table.component';


const routes: Routes = [
  { path:'', component:LandingComponent},
  { path:'table' , component:TableComponent},
  { path: 'PrincipleMod', loadChildren:()=>import ('./principle/principle.module').then(mod=>mod.PrincipleModule)},
  { path : "subjectModule", loadChildren:()=>import('./subject/subject.module').then(mod=>mod.SubjectModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
