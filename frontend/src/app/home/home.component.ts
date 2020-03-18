import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {faChevronLeft, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss'],
  animations: [
    trigger('EnterLeave', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({opacity: 1}))
      ])
    ])
  ]
})
export class HomeComponent {
  public selectedStep = 1;
  public stepCount = 2;
  public skipHidden = false;
  public icon = faInfoCircle;
  public backIcon = faChevronLeft;

  public constructor(private router: Router) {
  }

  public next(): void {
    if (this.selectedStep < this.stepCount) {
      this.selectedStep++;
    } else {
      this.router.navigateByUrl('/registration');
    }

    if (this.selectedStep === this.stepCount) {
      this.skipHidden = true;
    }
  }

  public prev(): void {
    if (this.selectedStep > 1) {
      this.selectedStep--;
      this.skipHidden = false;
    }
  }
}
