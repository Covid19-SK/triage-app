import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {TranslationService} from '../shared/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss'],
  animations: [
    trigger('Enter', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.5s 300ms ease-in')
      ]),
    ])
  ]
})
export class HomeComponent {
  // Don't remove translation service !!! ^(00)^
  public constructor(private translate: TranslationService) {}
}
