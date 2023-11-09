import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from './shared/shared.module';
import { TableComponent } from './pipes/table/table.component';


console.log('app modddd..');

@NgModule({
  declarations: [ //pipes,dir,compon
    AppComponent,
    LandingComponent,
    TableComponent,
 

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
