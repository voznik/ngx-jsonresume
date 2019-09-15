import { FormlyFieldConfig } from '@ngx-formly/core';

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

export const VALIDATION_MESSAGES = [
  { name: 'required', message: 'This field is required' },
  { name: 'null', message: 'should be null' },
  { name: 'minlength', message: minlengthValidationMessage },
  { name: 'maxlength', message: maxlengthValidationMessage },
  { name: 'min', message: minValidationMessage },
  { name: 'max', message: maxValidationMessage },
  { name: 'multipleOf', message: multipleOfValidationMessage },
  {
    name: 'exclusiveMinimum',
    message: exclusiveMinimumValidationMessage,
  },
  {
    name: 'exclusiveMaximum',
    message: exclusiveMaximumValidationMessage,
  },
  { name: 'minItems', message: minItemsValidationMessage },
  { name: 'maxItems', message: maxItemsValidationMessage },
];
