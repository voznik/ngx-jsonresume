import { NgModule } from '@angular/core';
import { SharedUiComponent } from './shared-ui.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [SharedUiComponent],
  imports: [MaterialModule],
  exports: [SharedUiComponent, MaterialModule]
})
export class SharedUiModule {}
