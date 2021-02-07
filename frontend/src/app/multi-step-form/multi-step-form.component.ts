import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormStepDirective } from '../directives/form-step.directive';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['multi-step-form.component.scss']
})
export class MultiStepFormComponent implements OnInit, AfterContentInit {

  @Input()
  public formData: FormGroup;

  @Input()
  public startStep: number;

  @Output()
  public nextAction = new EventEmitter<any>();

  @Output()
  public finishAction = new EventEmitter<any>();

  @ContentChildren(TemplateRef)
  public divs: QueryList<TemplateRef<FormStepDirective>>;

  public step = 0;

  public currentView: TemplateRef<any>;

  constructor() {
    this.nextStepHandle = this.nextStepHandle.bind(this);
    this.backStepHandle = this.backStepHandle.bind(this);
  }

  public ngOnInit() {
    console.log(this.formData[this.step]);
  }

  public renderForm() {
    this.currentView = this.divs.toArray()[this.step];
  }

  public ngAfterContentInit() {
    this.renderForm();
  }

  public nextStepHandle(value) {
    if (this.formData[this.step]?.status !== 'VALID') {
      return;
    }
    this.nextAction.emit(value);
    this.step++;
    this.renderForm();
  }

  public backStepHandle() {
    this.step--;
    this.renderForm();
  }

}
