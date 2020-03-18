import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { faChevronLeft, faQrcode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['code.scss'],
})
export class CodeComponent {
  public userId: string = this.authService.id;
  public icon = faQrcode;
  public backIcon = faChevronLeft;
  constructor(private authService: AuthService) {}
}
