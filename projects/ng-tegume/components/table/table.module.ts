import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NtTableComponent } from './table.component';
import { TableModule } from 'primeng/table';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    NtTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    TranslateModule
  ],
  exports: [
    NtTableComponent
  ]
})
export class NtTableModule { }
