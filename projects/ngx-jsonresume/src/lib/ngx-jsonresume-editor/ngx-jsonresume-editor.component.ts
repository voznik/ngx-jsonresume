// tslint:disable:no-string-literal component-selector
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';
import { tap } from 'rxjs/operators';
import { NgxJsonresumeService } from '../ngx-jsonresume.service';

@Component({
  selector: 'ngx-jsonresume-editor',
  template: `
  <div class="container-fluid">
    <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="fields">
      <formly-form
        [model]="model"
        [fields]="fields"
        [options]="options"
        [form]="form"
      ></formly-form>
      <div class="p-1">
        <button
          type="submit"
          mat-raised-button
          color="primary"
          [disabled]="!form.valid"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  `,
  styles: [``],
  encapsulation: ViewEncapsulation.None
})
export class NgxJsonresumeEditorComponent implements OnInit {
  @Input() appearance = 'outline';
  @Input() model: any = {};
  @Output() submitForm = new EventEmitter<any>();
  form: FormGroup;
  options: FormlyFormOptions;
  fields: FormlyFieldConfig[];

  constructor(
    private formlyJsonschema: FormlyJsonschema,
    private service: NgxJsonresumeService
  ) {}

  private initFormFromSchema() {
    this.service
      .loadSchema()
      .pipe(
        tap(schema => {
          this.form = new FormGroup({});
          this.options = {};
          this.fields = [
            this.formlyJsonschema.toFieldConfig(schema as any, {
              map: (field, source) => {
                field.templateOptions['appearance'] = this.appearance;
                return field;
              }
            })
          ];
        })
      )
      .subscribe();
  }

  onSubmit() {
    console.log(JSON.stringify(this.model));
    this.submitForm.emit(this.model);
  }

  ngOnInit() {
    this.initFormFromSchema();
    if (!this.model) {
      this.model = this.service.exampleModel;
    }
  }
}
