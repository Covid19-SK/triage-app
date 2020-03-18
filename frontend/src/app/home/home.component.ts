import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

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
}
