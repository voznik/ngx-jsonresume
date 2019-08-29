// tslint:disable:component-selector
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-object-type',
  template: `
    <mat-divider></mat-divider>
    <h4 class="label" *ngIf="to.label">{{ to.label }}</h4>
    <mat-hint class="description" *ngIf="to.description">{{ to.description }}</mat-hint>
    <div
      class="alert alert-danger"
      role="alert"
      *ngIf="showError && formControl.errors"
    >
      <formly-validation-message [field]="field"></formly-validation-message>
    </div>

    <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
  `
})
export class ObjectTypeComponent extends FieldType {
  defaultOptions = {
    defaultValue: {}
  };
}
