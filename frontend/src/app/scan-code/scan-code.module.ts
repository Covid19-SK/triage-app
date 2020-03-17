import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SCAN_CODE_ROUTE} from './scan-code.route';
import {ScanCodeComponent} from './scan-code.component';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    RouterModule.forChild([SCAN_CODE_ROUTE])],
  declarations: [ScanCodeComponent]
})
export class ScanCodeModule {
}
