import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FORM_ROUTE } from './form.route';
import { FormComponent } from './form.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([FORM_ROUTE])
  ],
  declarations: [FormComponent]
})
export class FormModule {}
