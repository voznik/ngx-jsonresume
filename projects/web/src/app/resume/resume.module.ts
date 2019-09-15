import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor/editor.component';
import { ResumeDataService } from './resume-data.service';
import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { ViewerComponent } from './viewer/viewer.component';

@NgModule({
  declarations: [EditorComponent, ResumeComponent, ViewerComponent],
  imports: [SharedModule, ResumeRoutingModule],
  providers: [ResumeDataService],
})
export class ResumeModule {}
