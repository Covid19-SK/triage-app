import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {shareReplay, startWith} from 'rxjs/operators';
import {DataService} from './data.service';
import {CurrentPatient} from './current-patient';

@Injectable({providedIn: 'root'})
export class CurrentPatientService {
  private userSource$: Subject<CurrentPatient> = new Subject();
  public patient$: Observable<CurrentPatient> = this.userSource$.asObservable().pipe(
    startWith(this.dataService.load('tpUser', {
      id: 0,
      firstName: '',
      lastName: '',
      identificationNumber: '',
      email: '',
      phoneNumber: '',
      dateOfBirth: '',
      address: '',
      town: '',
      zipCode: '',
    })),
    shareReplay(1)
  );

  public constructor(private dataService: DataService) {}

  public setPatient(user: CurrentPatient): void {
    this.dataService.save('tpUser', user);
    this.userSource$.next(user);
  }
}
