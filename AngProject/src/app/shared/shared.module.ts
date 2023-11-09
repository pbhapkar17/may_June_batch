import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharOnlyDirective } from '../directives/char-only.directive';
import { CurrencyPipe } from '../pipes/currency.pipe';
import { SearchPipe } from '../pipes/search.pipe';



@NgModule({
  declarations: [
    CharOnlyDirective,
    CurrencyPipe,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    CharOnlyDirective,
    CurrencyPipe,
    SearchPipe,

  ]
})
export class SharedModule { }
