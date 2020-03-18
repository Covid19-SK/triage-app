import { Route } from '@angular/router';

import { InstitutionDetailComponent } from './institution-detail.component';

export const INSTITUTION_DETAIL_ROUTE: Route = {
  path: 'admin/institution/:institutionId',
  component: InstitutionDetailComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome',
  },
};
