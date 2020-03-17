import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AdminModule} from './admin/admin.module';
import {CodeModule} from './code/code.module';
import {DetailModule} from './admin/patients/detail/detail.module';
import {ExamModule} from './admin/patients/exam/exam.module';
import {FormModule} from './form/form.module';
import {HomeModule} from './home/home.module';
import {LoginModule} from './login/login.module';
import {RegistrationModule} from './registration/registration.module';
import {PatientsModule} from './admin/patients/patients.module';
import {WorkplaceModule} from './workplace/workplace.module';
import {WorkplacesModule} from './admin/workplaces/workplaces.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    CodeModule,
    DetailModule,
    ExamModule,
    FormModule,
    HomeModule,
    LoginModule,
    PatientsModule,
    RegistrationModule,
    WorkplaceModule,
    WorkplacesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
