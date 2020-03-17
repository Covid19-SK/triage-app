import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.scss']
})
export class HomeComponent {
  public userId: string = this.authService.id;
  constructor(private authService: AuthService) {}
}
