import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {shareReplay, startWith} from 'rxjs/operators';
import {Exam} from './exam';
import {DataService} from './data.service';

@Injectable({providedIn: 'root'})
export class ExamService {
  private examSource$: Subject<Exam> = new Subject();

  public exam$: Observable<Exam> = this.examSource$.asObservable().pipe(
    startWith(this.dataService.load('tpExam', {
      workplace: '',
      cough: 'no',
      breathShortness: 'no',
      fever: false,
      other: '',
    })),
    shareReplay(1)
  );

  public constructor(private dataService: DataService) {}

  public setExam(exam: Exam): void {
    this.dataService.save('tpExam', exam);
    this.examSource$.next(exam);
  }
}
