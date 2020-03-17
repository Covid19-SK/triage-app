import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CODE_ROUTE} from './code.route';
import {CodeComponent} from './code.component';

@NgModule({
  imports: [RouterModule.forChild([CODE_ROUTE])],
  declarations: [CodeComponent]
})
export class CodeModule {
}
