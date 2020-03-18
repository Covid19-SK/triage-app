import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {first, map, shareReplay, startWith} from 'rxjs/operators';
import {Exam, ExamStatus} from './exam';
import {DataService} from './data.service';
import {AuthService} from './auth.service';
import {CurrentExam} from './current-exam';
import {first as _first} from 'lodash-es';
import {ExaminationDto} from '../../../../backend/src/examinations/examinations.dto';
import {Classification} from '../../../../backend/src/shared/enum/classification';
import {HttpClient} from '@angular/common/http';

function CreateDto(exam: Exam): ExaminationDto {
  return exam;
}

const API_URL = '/api/examinations';

export const defaultExam = {
  institutionId: 0,
  cough: Classification.None,
  breathShortness: Classification.None,
  fever: Classification.None,
  other: '',
  status: ExamStatus.INITIAL,
  abroad: false,
  illPersonContact: false,
  covid19Contact: false,
};

@Injectable({providedIn: 'root'})
export class ExamService {
  private examsSource$: Subject<Exam[]> = new Subject();
  public exams$: Observable<Exam[]> = this.examsSource$.asObservable().pipe(
    shareReplay(1),
  );
  private examSource$: Subject<CurrentExam> = new Subject();

  public exam$: Observable<CurrentExam> = this.examSource$.asObservable().pipe(
    startWith(this.dataService.load('tpExam', defaultExam)),
    shareReplay(1)
  );

  public constructor(
    private authService: AuthService,
    private dataService: DataService,
    private httpClient: HttpClient
  ) {

    this.refresh();
  }

  private refresh(): void {
    this.httpClient
      .get<ExaminationDto[]>(API_URL)
      .subscribe(examinations => this.examsSource$.next(examinations.map(e => ({...e, status: ExamStatus.INITIAL}))));
  }

  public setExam(exam: CurrentExam): void {
    this.dataService.save('tpExam', exam);
    this.examSource$.next(exam);
  }

  public update(obj: Exam): void {
    this.httpClient
      .put<ExaminationDto>(`${API_URL}/${obj.id}`, CreateDto(obj))
      .subscribe(() => this.refresh());
  }

  public create(obj: Exam): void {
    this.httpClient
      .post<ExaminationDto>(API_URL, CreateDto(obj))
      .subscribe(() => this.refresh());
  }

  public getByPatientId(patientId: string): Observable<Exam[]> {
    return this.exams$.pipe(
      map(objs => objs.filter(p => `${p.patientId}` === `${patientId}`))
    );
  }

  public getById(id: string): Observable<Exam> {
    return this.exams$.pipe(
      first(),
      map(objs => {
        const result = objs.filter(p => `${p.id}` === `${id}`);
        console.assert(result.length === 1);
        return _first(result);
      })
    );
  }

  public delete(id: string): void {
    this.httpClient
      .delete(`${API_URL}/${id}`)
      .subscribe(() => this.refresh());
  }
}
