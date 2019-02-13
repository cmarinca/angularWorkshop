import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { HomeModule } from './app/home/home.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HomeModule)
  .catch(err => console.error(err));
