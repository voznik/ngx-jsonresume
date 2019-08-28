import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ArrayTypeComponent } from './array.type';
import { NgxJsonresumeStreamlineComponent } from './ngx-jsonresume-streamline.component';
import { NgxJsonresumeStreamlineService } from './ngx-jsonresume-streamline.service';
import { ObjectTypeComponent } from './object.type';

export function minItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have fewer than ${field.templateOptions.minItems} items`;
}

export function maxItemsValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.templateOptions.maxItems} items`;
}

export function minlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be shorter than ${field.templateOptions.minLength} characters`;
}

export function maxlengthValidationMessage(err, field: FormlyFieldConfig) {
  return `should NOT be longer than ${field.templateOptions.maxLength} characters`;
}

export function minValidationMessage(err, field: FormlyFieldConfig) {
  return `should be >= ${field.templateOptions.min}`;
}

export function maxValidationMessage(err, field: FormlyFieldConfig) {
  return `should be <= ${field.templateOptions.max}`;
}

export function multipleOfValidationMessage(err, field: FormlyFieldConfig) {
  return `should be multiple of ${field.templateOptions.step}`;
}

export function exclusiveMinimumValidationMessage(
  err,
  field: FormlyFieldConfig
) {
  return `should be > ${field.templateOptions.step}`;
}

export function exclusiveMaximumValidationMessage(
  err,
  field: FormlyFieldConfig
) {
  return `should be < ${field.templateOptions.step}`;
}

@NgModule({
  declarations: [
    NgxJsonresumeStreamlineComponent,
    ArrayTypeComponent,
    ObjectTypeComponent
  ],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'null', message: 'should be null' },
        { name: 'minlength', message: minlengthValidationMessage },
        { name: 'maxlength', message: maxlengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'multipleOf', message: multipleOfValidationMessage },
        {
          name: 'exclusiveMinimum',
          message: exclusiveMinimumValidationMessage
        },
        {
          name: 'exclusiveMaximum',
          message: exclusiveMaximumValidationMessage
        },
        { name: 'minItems', message: minItemsValidationMessage },
        { name: 'maxItems', message: maxItemsValidationMessage }
      ],
      types: [
        { name: 'string', extends: 'input' },
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number'
            }
          }
        },
        {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number'
            }
          }
        },
        { name: 'boolean', extends: 'checkbox' },
        { name: 'enum', extends: 'select' },
        // { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent }
      ]
    }),
    FormlyMaterialModule
  ],
  exports: [NgxJsonresumeStreamlineComponent],
  providers: [NgxJsonresumeStreamlineService]
})
export class NgxJsonresumeStreamlineModule {}
