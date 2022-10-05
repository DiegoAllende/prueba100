import { APP_INITIALIZER } from '@angular/core';
import { CongifService } from '@core/services/congif.service';

const appConfigFactory = (congifService: CongifService) => {
  return () => congifService.loadConfig();
}

export const AppConfigProvider = {
  provide: APP_INITIALIZER,
  useFactory: appConfigFactory,
  multi: true,
  deps: [CongifService]
};