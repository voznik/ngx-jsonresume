import { OverlayContainer } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, tap, distinctUntilChanged } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { StoreService } from './store.service';
import { TitleService } from './title.service';

export const NIGHT_MODE_THEME = 'BLACK-THEME';

export type Language = 'en';

export interface SettingsState {
  language: string;
  theme: string;
  // autoNightMode: boolean;
  nightTheme: string;
  stickyHeader: boolean;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
  hour: number;
}

export interface State {
  isAuthenticated: boolean;
  settings: SettingsState;
}

export const initialState: State = {
  isAuthenticated: false,
  settings: {
    language: 'en',
    theme: 'DEFAULT-THEME',
    // autoNightMode: false,
    nightTheme: NIGHT_MODE_THEME,
    stickyHeader: true,
    pageAnimations: true,
    pageAnimationsDisabled: false,
    elementsAnimations: true,
    hour: 0,
  },
};

@Injectable()
export class AppService extends StoreService<State> {
  constructor(
    public afAuth: AngularFireAuth,
    private platform: Platform,
    private overlayContainer: OverlayContainer,
    private router: Router,
    private storageService: LocalStorageService,
    private titleService: TitleService,
    private translateService: TranslateService
  ) {
    super(initialState);
  }

  isIEorEdgeOrSafari() {
    return this.platform.SAFARI || this.platform.EDGE;
  }

  init() {
    this.storageService.testLocalStorage();

    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd),
        tap(() => {
          this.titleService.setTitle(
            this.router.routerState.snapshot.root,
            this.translateService
          );
        })
      )
      .subscribe();

    this.select('settings', 'language')
      .pipe(
        distinctUntilChanged(),
        tap(language => this.translateService.use(language))
      )
      .subscribe();

    this.select('settings', 'theme')
      .pipe(
        tap(effectiveTheme => {
          const classList = this.overlayContainer.getContainerElement()
            .classList;
          const toRemove = Array.from(classList).filter((item: string) =>
            item.includes('-theme')
          );
          if (toRemove.length) {
            classList.remove(...toRemove);
          }
          classList.add(effectiveTheme);
        })
      )
      .subscribe();
  }
}
