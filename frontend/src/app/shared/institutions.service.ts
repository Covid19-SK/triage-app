import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DataService} from './data.service';
import {AuthService} from './auth.service';
import {Institution} from './institution';
import {first as _first} from 'lodash-es';
import {first, map, shareReplay, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {InstitutionDto} from '../../../../backend/src/institutions/institution.dto';

const API_URL = '/api/institutions';

function CreateDto(institution: Institution): InstitutionDto {
  return institution;
}

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
    this.institutions$.subscribe();
  }

  public update(institution: Institution): void {
    this.httpClient
      .put<InstitutionDto>(`${API_URL}/${institution.id}`, CreateDto(institution))
      .subscribe(() => this.refresh());
  }

  public create(obj: Institution): void {
    this.httpClient
      .post<InstitutionDto>(API_URL, CreateDto(obj))
      .subscribe(() => this.refresh());
  }

  public delete(id: string): void {
    this.httpClient
      .delete(`${API_URL}/${id}`)
      .subscribe(() => this.refresh());
  }

  public getById(id: number): Observable<Institution> {
    return this.institutions$.pipe(
      first(),
      map(objs => {
        const result = objs.filter(p => `${p.id}` === `${id}`);
        console.assert(result.length === 1);
        return _first(result);
      })
    );
  }
}
