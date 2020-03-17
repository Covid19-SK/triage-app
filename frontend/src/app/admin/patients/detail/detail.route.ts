import { Route } from '@angular/router';

import { DetailComponent } from './detail.component';

export const DETAIL_ROUTE: Route = {
  path: 'admin/detail/:patientId',
  component: DetailComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome'
  }
};
