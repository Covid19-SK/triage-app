import { Route } from '@angular/router';

import { AdminComponent } from './admin.component';

export const ADMIN_ROUTE: Route = {
  path: 'admin',
  component: AdminComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome',
  },
};
