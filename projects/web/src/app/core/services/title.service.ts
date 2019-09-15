import { Title, Meta } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

import { environment as env } from '@app/env/environment';

@Injectable()
export class TitleService {
  constructor(
    private translateService: TranslateService,
    private title: Title,
    private meta: Meta
  ) {}

  setTitle(
    snapshot: ActivatedRouteSnapshot,
    lazyTranslateService?: TranslateService
  ) {
    let lastChild = snapshot;
    while (lastChild.children.length) {
      lastChild = lastChild.children[0];
    }
    const lastUrl = lastChild.url.toString();
    const { title, description } = lastChild.data;
    const translate = lazyTranslateService || this.translateService;
    if (title) {
      translate
        .get(title)
        .pipe(filter(translatedTitle => translatedTitle !== title))
        .subscribe(translatedTitle => {
          this.title.setTitle(`${translatedTitle} - ${env.appName}`);
          this.generateTags(lastUrl, title, description);
        });
    } else {
      this.title.setTitle(env.appName);
      this.generateTags(lastUrl, env.appName);
    }
  }

  generateTags(routeUrl = '', title = '', description = '', image = '') {
    this.meta.addTags([
      // Open Graph
      // { name: 'og:url', content: `${env.url}${routeUrl}` },
      { name: 'og:title', content: title },
      { name: 'og:description', content: description },
      { name: 'og:image', content: image },
      // Twitter Card
      // { name: 'twitter:card', content: 'summary' },
      // { name: 'twitter:site', content: '@fireship_dev' }
    ]);
  }
}
