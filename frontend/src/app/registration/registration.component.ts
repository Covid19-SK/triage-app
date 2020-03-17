import {Component, ElementRef, ViewChildren} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CurrentPatientService} from '../shared/current-patient.service';
import {Observable} from 'rxjs';
import {first, map, shareReplay, tap} from 'rxjs/operators';
import {faAddressCard, faCaretLeft, faChevronLeft, faInfoCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['registration.scss']
})
export class RegistrationComponent {
  public form$: Observable<FormGroup[]>;

  @ViewChildren('form')
  public form: ElementRef;

  constructor(private currentPatientService: CurrentPatientService) {
    this.form$ = this.currentPatientService.patient$.pipe(
      map(user => [
        new FormGroup({
          firstName: new FormControl(user.firstName)
        }),
        new FormGroup({
          lastName: new FormControl(user.lastName)
        }),
        new FormGroup({
          birthId: new FormControl(user.birthId)
        }),
        new FormGroup({
          email: new FormControl(user.email)
        }),
        new FormGroup({
          phone: new FormControl(user.phone)
        })
      ]),
      shareReplay(1)
    );
  }

  // tslint:disable-next-line:no-any
  public onNextAction(formData: any): void {
    this.form$.pipe(first()).subscribe(
      form => this.updatePacient(form)
    );
  }

  public onSubmit(): void {
    this.form$.pipe(first()).subscribe(
      form => {
        const patient = {
          firstName: form[0].controls['firstName'].value,
          lastName: form[1].controls['lastName'].value,
          birthId: form[2].controls['birthId'].value,
          email: form[3].controls['email'].value,
          phone: form[4].controls['phone'].value,
        };
        console.log(`Patient: `, patient);
        this.currentPatientService.setPatient(patient);
      }
    );
  }

  private updatePacient(form: FormGroup[]): void {
    const patient = {
      firstName: form[0].controls['firstName'].value,
      lastName: form[1].controls['lastName'].value,
      identificationNumber: form[2].controls['identificationNumber'].value,
      email: form[3].controls['email'].value,
      phoneNumber: form[4].controls['phoneNumber'].value,
      dateOfBirth: '', // TODO
      address: '', // TODO
      town: '', // TODO
      zipCode: '', // TODO
    };
    console.log(`Patient: `, patient);
    this.currentPatientService.setPatient(patient);
  }
}
