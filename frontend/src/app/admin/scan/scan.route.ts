import { Route } from '@angular/router';

import { ScanComponent } from './scan.component';

export const SCAN_ROUTE: Route = {
  path: 'admin/scan',
  component: ScanComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome',
  },
};
