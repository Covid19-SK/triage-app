import {Component} from '@angular/core';
import {ExamService} from '../../../shared/exam.service';
import {Exam} from '../../../shared/exam';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {first, map, shareReplay, switchMap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {PatientsService} from '../../../shared/patients.service';
import {isNil} from 'lodash-es';
import {InstitutionsService} from '../../../shared/institutions.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['detail.scss']
})
export class DetailComponent {
  public patientId$: Observable<string> = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('patientId'))
  );
  public form$: Observable<FormGroup>;
  public exams$: Observable<Exam[]> = this.patientId$.pipe(
    switchMap(patientId => this.examService.getByPatientId(patientId))
  );

  constructor(
    private examService: ExamService,
    private patientsService: PatientsService,
    private institutionsService: InstitutionsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form$ = this.patientId$.pipe(
      switchMap(patientId => this.patientsService.getById(patientId)),
      map(patient => new FormGroup({
        id: new FormControl(patient.id),
        firstName: new FormControl(patient.firstName),
        lastName: new FormControl(patient.lastName),
        birthId: new FormControl(patient.birthId),
        email: new FormControl(patient.email),
        phone: new FormControl(patient.phone),
      })),
      shareReplay(1),
    );
  }

  public onSaveClick(): void {
    this.form$.pipe(first()).subscribe(
      form => {
        if (isNil(form.value['id'])) {
          this.patientsService.create({
            id: undefined,
            ...form.value
          });
        } else {
          this.patientsService.update(form.value);
        }
      }
    );
  }

  public getInstitutionName(institutionId: string): Observable<string> {
    return this.institutionsService.getById(institutionId).pipe(
      map(i => i.name)
    );
  }

  public onDeleteClick(examId: string): void {
    this.examService.delete(examId);
  }
}
