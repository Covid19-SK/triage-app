import { Route } from '@angular/router';

import { RegistrationComponent } from './registration.component';

export const REGISTRATION_ROUTE: Route = {
  path: 'registration',
  component: RegistrationComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome',
  },
};
