import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  ErrorHandler,
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
} from '@angular/core';
// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// App
import { environment as env } from '@app/env/environment';
import {
  AppService,
  AppErrorHandler,
  HttpErrorInterceptor,
  LocalStorageService,
  TitleService
} from './services';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${env.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,
    // vendors
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded, import it in AppModule only.'
      );
    }
  }

  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        // { provide: 'API_URL', useValue: environment.apiUrl },
        { provide: ErrorHandler, useClass: AppErrorHandler },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true
        },
        AppService,
        LocalStorageService,
        TitleService
      ]
    };
  }
}
