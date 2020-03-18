import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SCAN_CODE_ROUTE} from './scan-code.route';
import {ScanCodeComponent} from './scan-code.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([SCAN_CODE_ROUTE])],
  declarations: [ScanCodeComponent]
})
export class ScanCodeModule {
}
