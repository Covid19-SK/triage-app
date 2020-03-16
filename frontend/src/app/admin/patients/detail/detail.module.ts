import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DETAIL_ROUTE } from './detail.route';
import { DetailComponent } from './detail.component';

@NgModule({
  imports: [RouterModule.forChild([DETAIL_ROUTE])],
  declarations: [DetailComponent]
})
export class DetailModule {}
