import { Route } from '@angular/router';

import { InstitutionComponent } from './institution.component';

export const INSTITUTION_ROUTE: Route = {
  path: 'institution',
  component: InstitutionComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome',
  },
};
