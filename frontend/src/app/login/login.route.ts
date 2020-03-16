import { Route } from '@angular/router';

import { LoginComponent } from './login.component';

export const LOGIN_ROUTE: Route = {
  path: 'login',
  component: LoginComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome'
  }
};
