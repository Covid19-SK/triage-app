import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CODE_ROUTE} from './code.route';
import {CodeComponent} from './code.component';
import {QRCodeModule} from 'angular2-qrcode';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    QRCodeModule,
    RouterModule.forChild([CODE_ROUTE]),
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [CodeComponent]
})
export class CodeModule {
}
