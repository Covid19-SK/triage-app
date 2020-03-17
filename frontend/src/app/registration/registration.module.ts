import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {REGISTRATION_ROUTE} from './registration.route';
import {RegistrationComponent} from './registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([REGISTRATION_ROUTE])
  ],
  declarations: [RegistrationComponent]
})
export class RegistrationModule {}
