import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment as env } from '@app/env/environment';
import {
  TranslateService,
  TranslateModule,
  TranslateLoader,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../core.module';
import { AppService } from './app.service';
import { LocalStorageService } from './local-storage.service';
import { TitleService } from './title.service';

describe('AppService', async () => {
  let service: AppService;
  // let http;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        AppService,
        LocalStorageService,
        TranslateService,
        TitleService,
      ],
    });
    service = TestBed.get(AppService);
    // translate = TestBed.get(TranslateService);
    // http = TestBed.get(HttpTestingController);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });

  it('init should be executable', async () => {
    spyOn(service, 'init');
    service.init();
    expect(service.init).toHaveBeenCalled();
  });
});
