import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { INSTITUTIONS_ROUTE } from './institutions.route';
import { InstitutionsComponent } from './institutions.component';

@NgModule({
  imports: [RouterModule.forChild([INSTITUTIONS_ROUTE])],
  declarations: [InstitutionsComponent]
})
export class InstitutionsModule {}
