import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appFormStep]',
})
export class FormStepDirective {
  //  @HostBinding('class.hidden') @Input() hidden = false;
  constructor() {}
}
