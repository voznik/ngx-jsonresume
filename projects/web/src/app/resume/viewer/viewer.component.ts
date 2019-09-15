import { Component, OnInit } from '@angular/core';
import { TitleService } from '@app/core/services';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss'],
})
export class ViewerComponent implements OnInit {
  resumeModel$: Observable<any>;

  constructor(
    private titleService: TitleService,
    private dataService: ResumeDataService
  ) {}

  ngOnInit() {
    this.resumeModel$ = this.dataService.getResume('default').pipe(
      tap(data => {
        if ('basics' in data) {
          const { name, picture, summary } = data.basics;
          this.titleService.generateTags(name, summary, picture);
        }
      })
    );
  }
}
