import {Component} from '@angular/core';
import {ExamService} from '../../../shared/exam.service';
import {Exam} from '../../../shared/exam';
import {Observable, of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, first, map, shareReplay, switchMap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {defaultPatient, PatientsService} from '../../../shared/patients.service';
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
  public examsShown$: Observable<boolean> = this.patientId$.pipe(
    map(patientId => patientId !== 'new')
  );
  public exams$: Observable<Exam[]> = this.patientId$.pipe(
    switchMap(patientId => this.examService.getByPatientId(patientId))
  );

  constructor(
    private examService: ExamService,
    private patientsService: PatientsService,
    private institutionsService: InstitutionsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form$ = this.patientId$.pipe(
      switchMap(patientId => {
        if (patientId === 'new') {
          return of({
            ...defaultPatient,
            id: undefined,
          });
        }
        return this.patientsService.getById(patientId);
      }),
      map(patient => new FormGroup({
        id: new FormControl(patient.id),
        firstName: new FormControl(patient.firstName),
        lastName: new FormControl(patient.lastName),
        identificationNumber: new FormControl(patient.identificationNumber),
        email: new FormControl(patient.email),
        phoneNumber: new FormControl(patient.phoneNumber),
        dateOfBirth: new FormControl(patient.dateOfBirth),
        address: new FormControl(patient.address),
        town: new FormControl(patient.town),
        zipCode: new FormControl(patient.zipCode),
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
        this.router.navigate(['admin/patients']);
      }
    );
  }

  public getInstitutionName(institutionId: number): Observable<string> {
    return this.institutionsService.getById(institutionId).pipe(
      map(i => i.name)
    );
  }

  public onDeleteClick(examId: string): void {
    this.examService.delete(examId);
  }
}
