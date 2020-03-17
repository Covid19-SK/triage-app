import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {DataService} from './data.service';
import {AuthService} from './auth.service';
import {Institution} from './institution';

const defaultInstitutions = [
  {
    id: 'kramare',
    name: 'Kramare'
  },
  {
    id: 'antolska',
    name: 'Antolska'
  },
];

@Injectable({providedIn: 'root'})
export class InstitutionsService {
  public constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  public getInstitutions(): Observable<Institution[]> {
    return of(this.dataService.load('tpInstitutions', defaultInstitutions));
  }
}
