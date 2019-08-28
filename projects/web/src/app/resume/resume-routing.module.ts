import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumePageComponent } from './resume-page/resume-page.component';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  { path: 'page', component: ResumePageComponent },
  { path: 'editor', component: EditorComponent },
  { path: '', redirectTo: 'page', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
