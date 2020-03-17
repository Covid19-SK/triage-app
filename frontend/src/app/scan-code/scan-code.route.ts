import { Route } from '@angular/router';

import { ScanCodeComponent } from './scan-code.component';

export const SCAN_CODE_ROUTE: Route = {
  path: 'scan-code',
  component: ScanCodeComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome'
  }
};
