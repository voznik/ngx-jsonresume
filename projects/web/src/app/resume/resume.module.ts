import { NgModule } from '@angular/core';

import { ResumeRoutingModule } from './resume-routing.module';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './resume.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ResumeDataService } from './resume-data.service';


@NgModule({
  declarations: [EditorComponent, ResumeComponent, ViewerComponent],
  imports: [
    SharedModule,
    ResumeRoutingModule,
  ],
  providers: [ResumeDataService]
})
export class ResumeModule { }
