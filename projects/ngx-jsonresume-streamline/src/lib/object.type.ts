import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-object-type',
  template: `
    <legend *ngIf="to.label">{{ to.label }}</legend>
    <p *ngIf="to.description">{{ to.description }}</p>
    <div class="alert alert-danger" role="alert" *ngIf="showError && formControl.errors">
      <formly-validation-message [field]="field"></formly-validation-message>
    </div>

    <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
  `,
})
export class ObjectTypeComponent extends FieldType {
    defaultOptions = {
        defaultValue: {},
    };
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */