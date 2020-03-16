import { Route } from '@angular/router';

import { WorkplacesComponent } from './workplaces.component';

export const WORKPLACES_ROUTE: Route = {
  path: 'admin/workplaces',
  component: WorkplacesComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome'
  }
};
