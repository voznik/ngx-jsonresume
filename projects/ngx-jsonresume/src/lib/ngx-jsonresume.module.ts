import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { SharedUiModule } from 'shared-ui';
import { TYPES, TYPES_COMPONENTS, VALIDATION_MESSAGES } from './formly';
import { NgxJsonresumeEditorComponent } from './ngx-jsonresume-editor';
import { NgxJsonresumeService } from './ngx-jsonresume.service';

@NgModule({
  declarations: [...TYPES_COMPONENTS, NgxJsonresumeEditorComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedUiModule,
    FormlyModule.forRoot({
      validationMessages: VALIDATION_MESSAGES,
      types: TYPES,
    }),
    FormlyMaterialModule,
  ],
  exports: [NgxJsonresumeEditorComponent],
  providers: [NgxJsonresumeService],
})
export class NgxJsonresumeModule {}
