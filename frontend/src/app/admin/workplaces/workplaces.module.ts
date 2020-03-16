import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WORKPLACES_ROUTE } from './workplaces.route';
import { WorkplacesComponent } from './workplaces.component';

@NgModule({
  imports: [RouterModule.forChild([WORKPLACES_ROUTE])],
  declarations: [WorkplacesComponent]
})
export class WorkplacesModule {}
