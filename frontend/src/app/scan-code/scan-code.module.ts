import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SCAN_CODE_ROUTE } from './scan-code.route';
import { ScanCodeComponent } from './scan-code.component';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamPreviewDirective } from './webcam-preview.directive';
import { ModalModule, BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forChild([SCAN_CODE_ROUTE])
  ],
  declarations: [ScanCodeComponent, WebcamPreviewDirective]
})
export class ScanCodeModule {
}
