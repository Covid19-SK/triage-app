import { Route } from '@angular/router';

import { WorkplaceComponent } from './workplace.component';

export const WORKPLACE_ROUTE: Route = {
  path: 'workplace',
  component: WorkplaceComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome'
  }
};
