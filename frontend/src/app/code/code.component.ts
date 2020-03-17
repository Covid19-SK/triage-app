import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['code.scss']
})
export class CodeComponent {
  public userId: string = this.authService.id;
  constructor(private authService: AuthService) {}
}
