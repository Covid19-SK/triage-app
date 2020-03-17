import {Component} from '@angular/core';
import {ExamService} from '../../../shared/exam.service';
import {Exam} from '../../../shared/exam';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['detail.scss']
})
export class DetailComponent {
  public exams$: Observable<Exam[]> = this.route.paramMap.pipe(
    switchMap(paramMap => this.examService.getExams(paramMap.get('patientId')))
  );

  constructor(
    private examService: ExamService,
    private route: ActivatedRoute
  ) {}
}
