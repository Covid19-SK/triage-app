import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormStepDirective } from './directives/form-step.directive';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MultiStepFormComponent, FormStepDirective],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MultiStepFormComponent,
    FormStepDirective,
  ],
})
export class FormComponentsModule {}
