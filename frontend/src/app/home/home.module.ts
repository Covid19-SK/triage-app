import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [RouterModule.forChild([HOME_ROUTE]), CommonModule],
  declarations: [HomeComponent]
})
export class HomeModule {}
