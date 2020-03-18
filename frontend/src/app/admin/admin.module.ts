import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ADMIN_ROUTE } from './admin.route';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [RouterModule.forChild([ADMIN_ROUTE])],
  declarations: [AdminComponent],
})
export class AdminModule {}
