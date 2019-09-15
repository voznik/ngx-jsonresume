import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  isDevMode
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShellComponent {
  @Input() logo;
  @Input() theme;
  @Input() navigation;
  @Input() navigationSideMenu;
  @Input() stickyHeader;
  @Input() language;
  @Input() isAuthenticated;
  @Input() version;
  @Input() envName;

  @Output() login = new EventEmitter<any>();
  @Output() logout = new EventEmitter<any>();
  @Output() languageChange = new EventEmitter<any>();

  year = new Date().getFullYear();
  isDev = isDevMode();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {}
}
