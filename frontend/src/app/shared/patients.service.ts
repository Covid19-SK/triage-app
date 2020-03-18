import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable, Subject } from 'rxjs';
import { first, map, shareReplay } from 'rxjs/operators';
import { DataService } from './data.service';
import { first as _first } from 'lodash-es';
import { HttpClient } from '@angular/common/http';
import { PatientDto } from '../../../../backend/src/patients/patient.dto';
import { InstitutionDto } from '../../../../backend/src/institutions/institution.dto';

function CreateDto(patient: Patient): PatientDto {
  return patient;
}

export const defaultPatient = {
  firstName: '',
  lastName: '',
  identificationNumber: '',
  email: '',
  phoneNumber: '',
  dateOfBirth: '',
  address: '',
  town: '',
  zipCode: '',
};

const API_URL = '/api/patients';

@Injectable({ providedIn: 'root' })
export class PatientsService {
  private patientsSource$: Subject<Patient[]> = new Subject();
  public patients$: Observable<
    Patient[]
  > = this.patientsSource$.asObservable().pipe(shareReplay(1));

  public constructor(
    private dataService: DataService,
    private httpClient: HttpClient,
  ) {
    this.refresh();
  }

  private refresh(): void {
    this.httpClient
      .get<PatientDto[]>(API_URL)
      .subscribe(patients => this.patientsSource$.next(patients));
  }

  public getById(id: string): Observable<Patient> {
    return this.patients$.pipe(
      first(),
      map(objs => {
        const result = objs.filter(p => `${p.id}` === `${id}`);
        console.assert(result.length === 1);
        return _first(result);
      }),
    );
  }

  public update(obj: Patient): void {
    this.httpClient
      .put<InstitutionDto>(`${API_URL}/${obj.id}`, CreateDto(obj))
      .subscribe(() => this.refresh());
  }

  public create(obj: Patient): void {
    this.httpClient
      .post<InstitutionDto>(API_URL, CreateDto(obj))
      .subscribe(() => this.refresh());
  }

  public delete(id: string): void {
    this.httpClient.delete(`${API_URL}/${id}`).subscribe(() => this.refresh());
  }
}
