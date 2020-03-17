import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {shareReplay, startWith} from 'rxjs/operators';
import {Exam} from './exam';

@Injectable({providedIn: 'root'})
export class ExamService {
  private examSource$: Subject<Exam> = new Subject();

  public exam$: Observable<Exam> = this.examSource$.asObservable().pipe(
    startWith({
      place: '',
      cough: 'no',
      breathShortness: 'no',
      fever: false,
      other: '',
    }),
    shareReplay(1)
  );

  public setExam(exam: Exam): void {
    this.examSource$.next(exam);
  }
}
