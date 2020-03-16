import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FORM_ROUTE } from './form.route';
import { FormComponent } from './form.component';

@NgModule({
  imports: [RouterModule.forChild([FORM_ROUTE])],
  declarations: [FormComponent]
})
export class FormModule {}
