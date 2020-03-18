import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { REGISTRATION_ROUTE } from './registration.route';
import { RegistrationComponent } from './registration.component';
import { CommonModule } from '@angular/common';
import { FormComponentsModule } from '../form-components.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FormComponentsModule,
    RouterModule.forChild([REGISTRATION_ROUTE]),
    SharedModule,
    FontAwesomeModule,
  ],
  declarations: [RegistrationComponent],
})
export class RegistrationModule {}
