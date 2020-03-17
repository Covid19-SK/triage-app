import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {REGISTRATION_ROUTE} from './registration.route';
import {RegistrationComponent} from './registration.component';
import {CommonModule} from '@angular/common';
import {FormComponentsModule} from '../form-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormComponentsModule,
    RouterModule.forChild([REGISTRATION_ROUTE])
  ],
  declarations: [
    RegistrationComponent,
  ]
})
export class RegistrationModule {}
