import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DETAIL_ROUTE} from './detail.route';
import {DetailComponent} from './detail.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([DETAIL_ROUTE])],
  declarations: [DetailComponent]
})
export class DetailModule {}
