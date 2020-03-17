import {Injectable} from '@angular/core';
import {Patient} from './patient';
import {Observable, of, Subject} from 'rxjs';
import {shareReplay, startWith} from 'rxjs/operators';
import {DataService} from './data.service';
import {first} from 'lodash-es';

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
    startWith(this.getAll()),
    shareReplay(1)
  );

  public constructor(private dataService: DataService) {
  }

  private getAll(): Patient[] {
    return this.dataService.load('tpPatients', defaultPatients);
  }

  public getById(patientId: string): Observable<Patient> {
    const patients = this.getAll()
      .filter(p => p.id === patientId);
    console.assert(patients.length === 1);
    return of(first(patients));
  }
}
