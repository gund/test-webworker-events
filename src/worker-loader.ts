import 'polyfills.ts';

import { enableProdMode } from '@angular/core';
import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformWorkerAppDynamic().bootstrapModule(AppModule)
  .then(() => console.log('Worker Bootstrapped'))
  .catch(e => console.error(`Worker Bootstrap error: ${e}`));
