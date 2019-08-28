import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'resume',
    loadChildren: () => import('./resume/resume.module').then(mod => mod.ResumeModule),
  },
  { path: '', redirectTo: 'resume', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
