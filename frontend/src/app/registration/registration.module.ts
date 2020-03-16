import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { REGISTRATION_ROUTE } from './registration.route';
import { RegistrationComponent } from './registration.component';

@NgModule({
  imports: [RouterModule.forChild([REGISTRATION_ROUTE])],
  declarations: [RegistrationComponent]
})
export class RegistrationModule {}
