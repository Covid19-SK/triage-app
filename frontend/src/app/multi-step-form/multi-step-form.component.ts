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
import {FormGroup} from '@angular/forms';
import {animate, group, query, style, transition, trigger} from '@angular/animations';

const left = [
  // query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('.3s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('.3s ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))], {
      optional: true,
    }),
  ]),
];

const right = [
  // query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('.3s ease-out', style({ transform: 'translateX(0%)', opacity: 1 }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('.3s ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['multi-step-form.component.scss'],
  animations: [
    trigger('animSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
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
    this.nextAction.emit(value);
    this.step++;
    this.renderForm();
  }

  public backStepHandle() {
    this.step--;
    this.renderForm();
  }

}
