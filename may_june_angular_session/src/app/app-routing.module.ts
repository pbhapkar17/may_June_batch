import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AddCircleComponent } from './add-circle/add-circle.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';



const routes: Routes = [
  { path : '' , component: LandingComponent },
  { path: 'Home', component : HomeComponent },
  { path : 'addCircle', component : AddCircleComponent },
  { path : 'landing' , component: LandingComponent},
  { path : 'student' , component: StudentComponent},
  
  // {
  //   path: 'studentModule',
  //   loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
  // },
  { path : 'studentModule', loadChildren:()=>import('./student/student.module').then(m => m.StudentModule)},
  { path: 'admin', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  { path: '**' , component : PagenotfoundComponent} // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
