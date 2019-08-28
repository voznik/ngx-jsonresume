import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'lib-formly-array-type',
  template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <p *ngIf="to.description">{{ to.description }}</p>

    <div
      class="alert alert-danger"
      role="alert"
      *ngIf="showError && formControl.errors"
    >
      <formly-validation-message [field]="field"></formly-validation-message>
    </div>

    <div *ngFor="let field of field.fieldGroup; let i = index" class="row">
      <formly-field class="flex-4" [field]="field"></formly-field>
      <div class="flex-2">
        <button
          mat-raised-button
          color="warn"
          type="button"
          (click)="remove(i)"
        >
          Remove
        </button>
      </div>
    </div>
    <div class="row">
      <div class="flex-2">
        <button mat-raised-button color="primary" type="button" (click)="add()">
          Add
        </button>
      </div>
      <div></div>
    </div>
  `
})
export class ArrayTypeComponent extends FieldArrayType {}
