import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ResumeComponent } from './resume.component';
import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    children: [
      {
        path: 'viewer',
        component: ViewerComponent,
        data: { title: 'Resume Viewer' },
      },
      {
        path: 'editor',
        component: EditorComponent,
        data: { title: 'Resume Editor' },
      },
      { path: '', redirectTo: 'editor', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
