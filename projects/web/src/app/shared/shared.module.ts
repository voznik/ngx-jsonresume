import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxJsonresumeModule } from 'ngx-jsonresume';
import { SharedUiModule } from 'shared-ui';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedUiModule,
    NgxJsonresumeModule
  ],
  declarations: [
    // ShellComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SharedUiModule,
    NgxJsonresumeModule
    // ShellComponent
  ]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
