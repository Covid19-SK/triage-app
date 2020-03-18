import { Route } from '@angular/router';

import { InstitutionsComponent } from './institutions.component';

export const INSTITUTIONS_ROUTE: Route = {
  path: 'admin/institutions',
  component: InstitutionsComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome',
  },
};
