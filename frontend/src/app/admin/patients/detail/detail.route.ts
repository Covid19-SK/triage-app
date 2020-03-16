import { Route } from '@angular/router';

import { DetailComponent } from './detail.component';

export const DETAIL_ROUTE: Route = {
  path: 'admin/detail',
  component: DetailComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome'
  }
};
