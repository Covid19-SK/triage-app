import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INSTITUTION_DETAIL_ROUTE } from './institution-detail.route';
import { InstitutionDetailComponent } from './institution-detail.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([INSTITUTION_DETAIL_ROUTE]),
  ],
  declarations: [InstitutionDetailComponent],
})
export class InstitutionDetailModule {}
