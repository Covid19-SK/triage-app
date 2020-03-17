import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CODE_ROUTE} from './code.route';
import {CodeComponent} from './code.component';
import {QRCodeModule} from 'angular2-qrcode';

@NgModule({
  imports: [
    QRCodeModule,
    RouterModule.forChild([CODE_ROUTE])],
  declarations: [CodeComponent]
})
export class CodeModule {
}
