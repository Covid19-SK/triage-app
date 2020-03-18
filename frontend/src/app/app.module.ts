import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { CodeModule } from './code/code.module';
import { DetailModule } from './admin/patients/detail/detail.module';
import { ExamModule } from './admin/patients/exam/exam.module';
import { FormModule } from './form/form.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { PatientsModule } from './admin/patients/patients.module';
import { InstitutionModule } from './institution/institution.module';
import { InstitutionsModule } from './admin/institutions/institutions.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScanModule } from './admin/scan/scan.module';
import { InstitutionDetailModule } from './admin/institutions/institution-detail/institution-detail.module';
import { BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';
import { ScanCodeModule } from './scan-code/scan-code.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AdminModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CodeModule,
    DetailModule,
    ExamModule,
    FormModule,
    HomeModule,
    LoginModule,
    PatientsModule,
    RegistrationModule,
    ScanModule,
    InstitutionModule,
    InstitutionDetailModule,
    InstitutionsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ScanCodeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
