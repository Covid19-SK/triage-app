import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {REGISTRATION_ROUTE} from './registration.route';
import {RegistrationComponent} from './registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MultiStepFormComponent} from '../multi-step-form/multi-step-form.component';
import {FormStepDirective} from '../directives/form-step.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([REGISTRATION_ROUTE])
  ],
  declarations: [
    RegistrationComponent,
    MultiStepFormComponent,
    FormStepDirective
  ]
})
export class RegistrationModule {}
