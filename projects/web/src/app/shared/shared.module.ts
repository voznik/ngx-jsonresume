import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxJsonresumeModule } from 'ngx-jsonresume';
import { SharedUiModule } from 'shared-ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    NgxJsonresumeModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUiModule,
    NgxJsonresumeModule
  ]
})
export class SharedModule {}
