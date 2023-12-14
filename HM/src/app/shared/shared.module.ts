import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../search.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@NgModule({
  declarations: [
    SearchPipe,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    HttpClientModule,
    SearchPipe,
    MatSnackBarModule,
    SnackbarComponent
  ]
})
export class SharedModule { }
