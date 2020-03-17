import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Exam} from '../../../shared/exam';
import {switchMap} from 'rxjs/operators';
import {ExamService} from '../../../shared/exam.service';
import {ActivatedRoute} from '@angular/router';
import {Patient} from '../../../shared/patient';
import {PatientsService} from '../../../shared/patients.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['exam.scss']
})
export class ExamComponent {
  public exam$: Observable<Exam> = this.route.paramMap.pipe(
    switchMap(paramMap => this.examService.getExam(paramMap.get('examId')))
  );
  public patient$: Observable<Patient> = this.exam$.pipe(
    switchMap(exam => this.patientsService.getById(exam.patientId))
  );
  constructor(
    private patientsService: PatientsService,
    private examService: ExamService,
    private route: ActivatedRoute
  ) {}
}
