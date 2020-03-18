import { Route } from '@angular/router';

import { CodeComponent } from './code.component';

export const CODE_ROUTE: Route = {
  path: 'code',
  component: CodeComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome',
    animation: 'CodePage'
  }
};
