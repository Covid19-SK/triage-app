import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exam } from '../../../shared/exam';
import { first, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { defaultExam, ExamService } from '../../../shared/exam.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../../../shared/patient';
import { PatientsService } from '../../../shared/patients.service';
import { FormControl, FormGroup } from '@angular/forms';
import { isNil } from 'lodash-es';
import { Institution } from '../../../shared/institution';
import { InstitutionsService } from '../../../shared/institutions.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['exam.scss'],
})
export class ExamComponent {
  public form$: Observable<FormGroup>;
  public patient$: Observable<Patient> = this.route.paramMap.pipe(
    switchMap(paramMap =>
      this.patientsService.getById(paramMap.get('patientId')),
    ),
  );
  public institutions$: Observable<Institution[]> = this.institutionsService
    .institutions$;

  constructor(
    private patientsService: PatientsService,
    private examService: ExamService,
    private institutionsService: InstitutionsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form$ = this.route.paramMap.pipe(
      switchMap(paramMap => {
        const examId = paramMap.get('examId');
        if (examId === 'new') {
          return of({
            ...defaultExam,
            id: undefined,
            patientId: paramMap.get('patientId'),
          });
        }
        return this.examService.getById(examId);
      }),
      map(
        (exam: Exam) =>
          new FormGroup({
            id: new FormControl(exam.id),
            patientId: new FormControl(exam.patientId),
            institutionId: new FormControl(exam.institutionId),
            cough: new FormControl(exam.cough),
            breathShortness: new FormControl(exam.breathShortness),
            fever: new FormControl(exam.fever),
            other: new FormControl(exam.other),
            abroad: new FormControl(exam.abroad),
            illPersonContact: new FormControl(exam.illPersonContact),
            covid19Contact: new FormControl(exam.covid19Contact),
            status: new FormControl(exam.status),
          }),
      ),
      shareReplay(1),
    );
  }

  public onSaveClick(): void {
    this.form$.pipe(first()).subscribe(form => {
      if (isNil(form.value['id'])) {
        this.examService.create({
          ...form.value,
          id: undefined,
        });
      } else {
        this.examService.update(form.value);
      }
      this.router.navigate([`/admin/detail/${form.value.patientId}`]);
    });
  }
}
