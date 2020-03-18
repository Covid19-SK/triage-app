import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { INSTITUTION_ROUTE } from './institution.route';
import { InstitutionComponent } from './institution.component';

@NgModule({
  imports: [RouterModule.forChild([INSTITUTION_ROUTE])],
  declarations: [InstitutionComponent]
})
export class InstitutionModule {}
