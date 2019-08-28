import { NgModule } from '@angular/core';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { EditorComponent } from './editor/editor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ResumePageComponent, EditorComponent],
  imports: [
    SharedModule,
    ResumeRoutingModule,
  ]
})
export class ResumeModule { }
