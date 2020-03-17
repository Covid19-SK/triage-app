import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {first, map, shareReplay, startWith} from 'rxjs/operators';
import {Exam, ExamStatus} from './exam';
import {DataService} from './data.service';
import {AuthService} from './auth.service';
import {CurrentExam} from './current-exam';
import {concat, first as _first} from 'lodash-es';
import * as uuidv4 from 'uuid/v4';

export const defaultExam = {
  institution: '',
  cough: 'no',
  breathShortness: 'no',
  fever: false,
  other: '',
  status: ExamStatus.INITIAL,
};

const defaultExams = [{
  id: '2020-03-07T13:00:00Z',
  date: '2020-03-07T13:00:00Z',
  patientId: 'vncnt',
  institution: 'kramare',
  cough: 'no',
  breathShortness: 'modest',
  fever: true,
  other: '',
  status: ExamStatus.INITIAL,
}];

@Injectable({providedIn: 'root'})
export class ExamService {
  private examsSource$: Subject<Exam[]> = new Subject();
  public exams$: Observable<Exam[]> = this.examsSource$.asObservable().pipe(
    startWith(this.dataService.load('tpPatientExams', defaultExams)),
    shareReplay(1),
  );
  private examSource$: Subject<CurrentExam> = new Subject();

  public exam$: Observable<CurrentExam> = this.examSource$.asObservable().pipe(
    startWith(this.dataService.load('tpExam', {
      // use something normal for date
      date: new Date().toString(),
      institution: '',
      cough: 'no',
      breathShortness: 'no',
      fever: false,
      other: '',
    })),
    shareReplay(1)
  );

  public constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}

  private save(exams: Exam[]): void {
    this.examsSource$.next(exams);
    this.dataService.save('tpPatientExams', exams);
  }

  public setExam(exam: CurrentExam): void {
    this.dataService.save('tpExam', exam);
    this.examSource$.next(exam);
  }

  public update(exam: Exam): void {
    this.exams$.pipe(
      first(),
      map(exams => exams.map(i => i.id === exam.id ? exam : i)),
    ).subscribe(institutions => this.save(institutions));
  }

  public create(exam: Exam): void {
    this.exams$.pipe(
      first(),
      map(exams => concat(exams, [{
        ...exam,
        id: uuidv4()
      }])),
    ).subscribe(institutions => this.save(institutions));
  }

  public getByPatientId(patientId: string): Observable<Exam[]> {
    return this.exams$.pipe(
      first(),
      map(exams => exams.filter(p => p.patientId === patientId))
    );
  }

  public getById(id: string): Observable<Exam> {
    return this.exams$.pipe(
      first(),
      map(exams => {
        const result = exams.filter(p => p.id === id);
        console.assert(result.length === 1);
        return _first(result);
      })
    );
  }
}
