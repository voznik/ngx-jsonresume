// tslint:disable:use-component-view-encapsulation
import { Component, ViewEncapsulation } from '@angular/core';
import { routeAnimations } from 'shared-ui';

@Component({
  selector: 'app-resume',
  template: `
    <nav mat-tab-nav-bar class="d-none d-sm-flex">
      <a
        mat-tab-link
        *ngFor="let e of routes"
        [routerLink]="e.link"
        routerLinkActive
        #rla="routerLinkActive"
        [active]="rla.isActive"
      >
        {{ e.label | translate }}
      </a>
    </nav>

    <nav class="nav-responsive d-sm-none d-flex justify-content-center">
      <mat-select [placeholder]="'routes.title' | translate" [value]="'todos'">
        <mat-option *ngFor="let e of routes" [value]="e" [routerLink]="e.link">
          <!--[disabled]="e.auth && !(isAuthenticated$ | async)"-->
          {{ e.label | translate }}
        </mat-option>
      </mat-select>
    </nav>

    <div
      class="wrap"
      [@routeAnimations]="o.isActivated && o.activatedRoute.routeConfig.path"
    >
      <router-outlet #o="outlet"></router-outlet>
    </div>
  `,
  styles: [``],
  animations: [routeAnimations],
  encapsulation: ViewEncapsulation.None,
})
export class ResumeComponent {
  routes = [
    { label: 'Editor', link: 'editor' },
    { label: 'Viewer', link: 'viewer' },
  ];

  constructor() {}
}
