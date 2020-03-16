import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PATIENTS_ROUTE } from './patients.route';
import { PatientsComponent } from './patients.component';

@NgModule({
  imports: [RouterModule.forChild([PATIENTS_ROUTE])],
  declarations: [PatientsComponent]
})
export class PatientsModule {}
