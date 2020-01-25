import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch<void>((
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onrejected: ((reason: any) => void | PromiseLike<void>) | null | undefined
  ) => console.error(onrejected));
