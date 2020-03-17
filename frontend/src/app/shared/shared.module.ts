import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HeaderComponent} from '../widgets/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule {
}
