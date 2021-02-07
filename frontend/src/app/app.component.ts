import { Component } from '@angular/core';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent {
  public title = 'COVID 19';
  public icon = faInfoCircle;

  public prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
