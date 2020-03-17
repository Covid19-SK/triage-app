import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {DataService} from './data.service';
import {AuthService} from './auth.service';
import {Institution} from './institution';
import {concat, first as _first} from 'lodash-es';
import {first, map, shareReplay, startWith} from 'rxjs/operators';
import * as uuidv4 from 'uuid/v4';

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
  private institutionsSource$: Subject<Institution[]> = new Subject();
  public institutions$: Observable<Institution[]> = this.institutionsSource$.asObservable().pipe(
    startWith(this.dataService.load('tpInstitutions', defaultInstitutions)),
    shareReplay(1),
  );
  public constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  private save(institutions: Institution[]): void {
    this.institutionsSource$.next(institutions);
    this.dataService.save('tpInstitutions', institutions);
  }

  public update(institution: Institution): void {
    this.institutions$.pipe(
      first(),
      map(institutions => institutions.map(i => i.id === institution.id ? institution : i)),
    ).subscribe(institutions => this.save(institutions));
  }

  public create(institution: Institution): void {
    this.institutions$.pipe(
      first(),
      map(institutions => concat(institutions, [{
        ...institution,
        id: uuidv4()
      }])),
    ).subscribe(institutions => this.save(institutions));
  }

  public delete(institutionId: string): void {
    this.institutions$.pipe(
      first(),
      map(institutions => institutions.filter(i => i.id !== institutionId)),
    ).subscribe(institutions => this.save(institutions));
  }

  public getById(institutionId: string): Observable<Institution> {
    return this.institutions$.pipe(
      first(),
      map(institutions => {
        const result = institutions.filter(p => p.id === institutionId);
        console.assert(result.length === 1);
        return _first(result);
      })
    );
  }
}
