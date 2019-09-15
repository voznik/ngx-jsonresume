import { Component, OnInit } from '@angular/core';
import { environment as env } from '@app/env/environment';
import { routeAnimations, AnimationsService } from 'shared-ui';
import { Observable } from 'rxjs';
import { AppService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = '0';
  languages = ['en'];
  navigation = [
    { link: 'about', label: 'menu.about' },
    { link: 'resume', label: 'menu.examples' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'menu.settings' }
  ];
  logo = require('../assets/logo.png');
  isAuthenticated$: Observable<boolean>;
  stickyHeader$: Observable<boolean>;
  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private app: AppService,
    private animationsService: AnimationsService,
  ) {
    this.app.init();
  }

  private static isIEorEdgeOrSafari() {
    return ['ie', 'edge', 'safari'].includes(window.navigator.appName);
  }

  ngOnInit(): void {

    if (AppComponent.isIEorEdgeOrSafari()) {
      this.animationsService.updateRouteAnimationType(false, false);
    }

    this.isAuthenticated$ = this.app.select('isAuthenticated');
    this.stickyHeader$ = this.app.select('settings', 'stickyHeader');
    this.language$ = this.app.select('settings', 'language');
    this.theme$ = this.app.select('settings', 'theme');
  }

  onLogin() {
    // this.store.dispatch(authLogin());
  }

  onLogout() {
    // this.store.dispatch(authLogout());
  }

  onLanguageSelect({ value: language }) {
    // this.store.dispatch(actionSettingsChangeLanguage({ language }));
  }
}
