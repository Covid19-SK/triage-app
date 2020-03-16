import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WORKPLACE_ROUTE } from './workplace.route';
import { WorkplaceComponent } from './workplace.component';

@NgModule({
  imports: [RouterModule.forChild([WORKPLACE_ROUTE])],
  declarations: [WorkplaceComponent]
})
export class WorkplaceModule {}
