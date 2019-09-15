import { Component, OnInit } from '@angular/core';
import { isObject } from '@terminus/ngx-tools/type-guards';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  model: any;
  resumeModel$: Observable<any>;

  constructor(private dataService: ResumeDataService) {}

  ngOnInit() {
    this.resumeModel$ = this.dataService.getResume('default').pipe(
      tap(model => {
        console.log('isObject', isObject(model));
      })
    );
  }
}
