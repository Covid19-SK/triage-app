import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PATIENTS_ROUTE} from './patients.route';
import {PatientsComponent} from './patients.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([PATIENTS_ROUTE])],
  declarations: [PatientsComponent]
})
export class PatientsModule {}
