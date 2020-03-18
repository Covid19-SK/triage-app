import { Route } from '@angular/router';

import { FormComponent } from './form.component';

export const FORM_ROUTE: Route = {
  path: 'form',
  component: FormComponent,
  data: {
    authorities: [],
    pageTitle: 'Welcome',
    animation: 'FormPage'
  }
};
