import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders
} from '@angular/core';
import { ShellComponent } from './components';
import { MaterialModule } from './material.module';
import { AnimationsService, NotificationService } from './services';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faBars,
  faUserCircle,
  faPowerOff,
  faCog,
  faRocket,
  faPlayCircle,
  faGithub,
  faMediumM,
  faTwitter,
  faInstagram,
  faYoutube,
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook
);

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    RouterModule,
    TranslateModule
  ],
  exports: [ShellComponent, MaterialModule, FontAwesomeModule]
})
export class SharedUiModule {
  /* constructor(@Optional() @SkipSelf() parentModule: SharedUiModule) {
    if (parentModule) {
      throw new Error(
        'SharedUiModule is already loaded, import it in AppModule only.'
      );
    }
  } */

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedUiModule,
      providers: [AnimationsService, NotificationService]
    };
  }
}
