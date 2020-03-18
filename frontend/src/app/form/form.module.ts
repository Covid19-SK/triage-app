import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FORM_ROUTE } from './form.route';
import { FormComponent } from './form.component';
import { CommonModule } from '@angular/common';
import { FormComponentsModule } from '../form-components.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormComponentsModule,
    RouterModule.forChild([FORM_ROUTE]),
    SharedModule,
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  declarations: [FormComponent],
})
export class FormModule {}
