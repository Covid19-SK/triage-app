import {Injectable} from '@angular/core';
import {Patient} from './patient';
import {Observable, Subject} from 'rxjs';
import {first, map, shareReplay, startWith} from 'rxjs/operators';
import {DataService} from './data.service';
import {concat, first as _first} from 'lodash-es';
import * as uuidv4 from 'uuid/v4';

const defaultPatients = [
  {
    id: 'vncnt',
    firstName: 'Vincent',
    lastName: 'Cierny',
    birthId: '9902029184',
    email: 'vincent.cierny@email.com',
    phone: '+421 902 029 184',
  },
  {
    id: 'rchrd',
    firstName: 'Richard',
    lastName: 'Kuchar',
    birthId: '9905105392',
    email: 'richard.kuchar@email.com',
    phone: '+421 905 105 392',
  },
  {
    id: 'brbr',
    firstName: 'Barbora',
    lastName: 'Janosikova',
    birthId: '9901332950',
    email: 'barbora.janosikova@email.com',
    phone: '+421 901 332 950',
  },
];

@Injectable({providedIn: 'root'})
export class PatientsService {
  private patientsSource$: Subject<Patient[]> = new Subject();
  public patients$: Observable<Patient[]> = this.patientsSource$.asObservable().pipe(
    startWith(this.dataService.load('tpPatients', defaultPatients)),
    shareReplay(1)
  );

  public constructor(private dataService: DataService) {}

  private save(patients: Patient[]): void {
    this.patientsSource$.next(patients);
    this.dataService.save('tpPatients', patients);
  }

  public getById(patientId: string): Observable<Patient> {
    return this.patients$.pipe(
      first(),
      map(patients => {
        const result = patients.filter(p => p.id === patientId);
        console.assert(result.length === 1);
        return _first(result);
      })
    );
  }

  public update(patient: Patient): void {
    this.patients$.pipe(
      first(),
      map(patients => patients.map(i => i.id === patient.id ? patient : i)),
    ).subscribe(institutions => this.save(institutions));
  }

  public create(patient: Patient): void {
    this.patients$.pipe(
      first(),
      map(patients => concat(patients, [{
        ...patient,
        id: uuidv4()
      }])),
    ).subscribe(institutions => this.save(institutions));
  }
}
