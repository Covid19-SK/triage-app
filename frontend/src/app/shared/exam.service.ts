import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {shareReplay, startWith} from 'rxjs/operators';
import {Exam, ExamStatus} from './exam';
import {DataService} from './data.service';
import {AuthService} from './auth.service';
import {CurrentExam} from './current-exam';
import {first} from 'lodash-es';

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

  public setExam(exam: CurrentExam): void {
    this.dataService.save('tpExam', exam);
    this.examSource$.next(exam);
  }

  public getExams(patientId: string): Observable<Exam[]> {
    return of(this.dataService
      .load('tpPatientExams', defaultExams)
      .filter(e => e.patientId === patientId)
    );
  }

  public getExam(examId: string): Observable<Exam> {
    const exams = this.dataService
      .load('tpPatientExams', defaultExams)
      .filter(e => e.id === examId);
    console.assert(exams.length === 1);
    return of(first(exams));
  }
}
