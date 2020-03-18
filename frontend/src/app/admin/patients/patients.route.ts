import { Route } from '@angular/router';

import { PatientsComponent } from './patients.component';

export const PATIENTS_ROUTE: Route = {
  path: 'admin/patients',
  component: PatientsComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome',
  },
};
