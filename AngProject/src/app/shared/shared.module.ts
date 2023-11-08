import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharOnlyDirective } from '../directives/char-only.directive';



@NgModule({
  declarations: [
    CharOnlyDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    CharOnlyDirective
  ]
})
export class SharedModule { }
