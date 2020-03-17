import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CurrentPatientService} from '../shared/current-patient.service';
import {Observable} from 'rxjs';
import {first, map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['registration.scss']
})
export class RegistrationComponent {
  public form$: Observable<FormGroup>;

  constructor(private currentPatientService: CurrentPatientService) {
    this.form$ = this.currentPatientService.patient$.pipe(
      map(user => new FormGroup({
          firstName: new FormControl(user.firstName),
          lastName: new FormControl(user.lastName),
          birthId: new FormControl(user.birthId),
          email: new FormControl(user.email),
          phone: new FormControl(user.phone),
        })
      ),
      shareReplay(1)
    );
  }

  public onSubmit(): void {
    this.form$.pipe(first()).subscribe(
      form => this.currentPatientService.setPatient({
        firstName: form.value['firstName'],
        lastName: form.value['lastName'],
        birthId: form.value['birthId'],
        email: form.value['email'],
        phone: form.value['phone'],
      })
    );
  }
}
