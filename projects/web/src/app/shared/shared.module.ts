import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxJsonresumeModule } from 'ngx-jsonresume';
import { BigInputActionComponent } from './big-input/big-input-action.component';
import { BigInputComponent } from './big-input/big-input.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgxJsonresumeModule
  ],
  declarations: [BigInputComponent, BigInputActionComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BigInputComponent,
    BigInputActionComponent,
    NgxJsonresumeModule
  ]
})
export class SharedModule {}
