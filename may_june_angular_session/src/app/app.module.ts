import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddCircleComponent } from './add-circle/add-circle.component';

import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [  //components,directives,pipes
    AppComponent,
    LandingComponent,
    AddCircleComponent,
    PagenotfoundComponent,
    StudentComponent,
 
  ],
  imports: [      //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
