import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EXAM_ROUTE } from './exam.route';
import { ExamComponent } from './exam.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([EXAM_ROUTE]),
  ],
  declarations: [ExamComponent],
})
export class ExamModule {}
