import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ResumeComponent } from './resume.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    children: [
      { path: 'viewer', component: ViewerComponent },
      { path: 'editor', component: EditorComponent },
      { path: '', redirectTo: 'editor', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule {}
