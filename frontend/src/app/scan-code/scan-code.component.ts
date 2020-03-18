import { Component, TemplateRef } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ScanCodeService } from './scan-code.service';

@Component({
  selector   : 'app-code',
  templateUrl: './scan-code.component.html',
  styleUrls  : ['scan-code.scss']
})
export class ScanCodeComponent {
  public userId: string                        = this.authService.id;
  public elementType: 'url' | 'canvas' | 'img' = 'url';
  public value                                 = 'Techiediaries';
  public code: string;
  private modalRef: BsModalRef;

  public constructor(private readonly authService: AuthService,
                     public readonly scanCodeService: ScanCodeService,
                     private modalService: BsModalService) {
  }
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public onCodeScanned(code: string): void {
    if (this.modalRef) {
      this.modalRef.hide();
    }
    this.code = code;
  }


}
