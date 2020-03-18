import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SCAN_ROUTE } from './scan.route';
import { ScanComponent } from './scan.component';

@NgModule({
  imports: [RouterModule.forChild([SCAN_ROUTE])],
  declarations: [ScanComponent],
})
export class ScanModule {}
