import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtInputComponent } from './input.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NtInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule
  ],
  exports: [
    NtInputComponent
  ]
})
export class NtInputModule { }
