import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-code',
  templateUrl: './scan-code.component.html',
  styleUrls: ['scan-code.scss']
})
export class ScanCodeComponent {
  public userId: string = this.authService.id;
  public elementType: 'url' | 'canvas' | 'img' = 'url';
  public value: string = 'Techiediaries';

  constructor(private authService: AuthService) {}
}
