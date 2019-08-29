// tslint:disable:component-selector
import { Component, ViewEncapsulation } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-array-type',
  template: `
    <mat-divider></mat-divider>
    <div class="row">
      <div class="col-xs-10">
        <h4 class="label" *ngIf="to.label">{{ to.label }}</h4>
        <mat-hint class="description" *ngIf="to.description">{{ to.description }}</mat-hint>
      </div>
      <div class="col-xs-2 p-1 f-c">
        <button mat-raised-button color="primary" type="button" (click)="add()">
          Add
        </button>
      </div>
      <div
        class="alert alert-danger"
        role="alert"
        *ngIf="showError && formControl.errors"
      >
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
    </div>

    <div *ngFor="let field of field.fieldGroup; let i = index" class="row">
      <formly-field class="col-xs-10" [field]="field"></formly-field>
      <div class="col-xs-2 p-1 f-c">
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
  `,
  encapsulation: ViewEncapsulation.None
})
export class ArrayTypeComponent extends FieldArrayType {}
