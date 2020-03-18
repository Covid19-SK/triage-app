import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DataService} from './data.service';
import {AuthService} from './auth.service';
import {Institution} from './institution';
import {first as _first} from 'lodash-es';
import {first, map, shareReplay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {InstitutionDto} from '../../../../backend/src/institutions/institution.dto';

const API_URL = '/api/institutions';

@Injectable({providedIn: 'root'})
export class InstitutionsService {
  private institutionsSource$: Subject<Institution[]> = new Subject();
  public institutions$: Observable<Institution[]> = this.institutionsSource$.asObservable().pipe(
    shareReplay(1),
  );

  public constructor(
    private authService: AuthService,
    private dataService: DataService,
    private httpClient: HttpClient,
  ) {
    this.refresh();
  }

  private refresh(): void {
    this.httpClient
      .get<InstitutionDto[]>(API_URL)
      .subscribe(institutions => this.institutionsSource$.next(institutions));
  }

  public update(institution: Institution): void {
    this.httpClient
      .put<InstitutionDto>(`${API_URL}/${institution.id}`, {name: institution.name})
      .subscribe(() => this.refresh());
  }

  public create(institution: Institution): void {
    this.httpClient
      .post<InstitutionDto>(API_URL, {name: institution.name})
      .subscribe(() => this.refresh());
  }

  public delete(institutionId: string): void {
    this.httpClient
      .delete(`${API_URL}/${institutionId}`)
      .subscribe(() => this.refresh());
  }

  public getById(institutionId: string): Observable<Institution> {
    return this.institutions$.pipe(
      first(),
      map(institutions => {
        const result = institutions.filter(p => `${p.id}` === `${institutionId}`);
        console.assert(result.length === 1);
        return _first(result);
      })
    );
  }
}
