import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { tap } from 'rxjs/operators';
import { NgxJsonresumeStreamlineService } from './ngx-jsonresume-streamline.service';

@Component({
  selector: 'lib-ngx-jsonresume-streamline',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit()" *ngIf="fields">
      <formly-form
        [model]="model"
        [fields]="fields"
        [options]="options"
        [form]="form"
      ></formly-form>
      <button
        type="submit"
        class="btn btn-primary submit-button"
        [disabled]="!form.valid"
      >
        Submit
      </button>
    </form>
  `,
  styles: [
    `
      .display-flex {
        display: flex;
      }

      .flex-1 {
        flex: 1;
      }

      .flex-2 {
        flex: 2;
      }

      .flex-3 {
        flex: 3;
      }

      .flex-4 {
        flex: 4;
      }

      .flex-5 {
        flex: 5;
      }

      .flex-6 {
        flex: 6;
      }

      [class*='flex-'] {
        padding-left: 10px;
        padding-right: 10px;
      }

      [class*='flex-']:first-child {
        padding-left: 0;
      }

      [class*='flex-']:nth-last-child(2) {
        padding-right: 0;
      }
    `
  ]
})
export class NgxJsonresumeStreamlineComponent implements OnInit {
  form: FormGroup;
  model: any = {};
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  type: string;
  examples = [
    'simple',
    'nested',
    'arrays',
    'numbers',
    'references',
    'schema_dependencies',
    'allOf'
  ];

  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private service: NgxJsonresumeStreamlineService
  ) {
    this.loadExample(/* this.examples[0] */);
  }

  loadExample(type?: string) {
    this.service
      .loadExample()
      .pipe(
        tap(schema => {
          this.type = type;
          this.form = new FormGroup({});
          this.options = {};
          this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
          // this.model = model;
        })
      )
      .subscribe();
  }

  submit() {
    alert(JSON.stringify(this.model));
  }

  ngOnInit() {}
}
