// tslint:disable:no-string-literal
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
  templateUrl: './ngx-jsonresume-editor.component.html',
  styleUrls: ['./ngx-jsonresume-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxJsonresumeEditorComponent implements OnInit {
  @Input() appearance = 'outline';
  @Input() model: any = {};
  @Output() submit = new EventEmitter<any>();
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
    this.submit.emit(this.model);
  }

  ngOnInit() {
    this.initFormFromSchema();
    if (!this.model) {
      this.model = this.service.exampleModel;
    }
  }
}
