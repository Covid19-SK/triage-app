import {Component} from '@angular/core';
import {first, map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {ExamService} from '../shared/exam.service';
import {Institution} from '../shared/institution';
import {InstitutionsService} from '../shared/institutions.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['form.scss']
})
export class FormComponent {
  public form$: Observable<FormGroup[]>;

  constructor(
    private examService: ExamService,
    private institutionsService: InstitutionsService
  ) {
    this.form$ = this.examService.exam$.pipe(
      map(exam => [
        new FormGroup({
          workplace: new FormControl(exam.workplace)
        }),
        new FormGroup({
          cough: new FormControl(exam.cough)
        }),
        new FormGroup({
          breathShortness: new FormControl(exam.breathShortness)
        }),
        new FormGroup({
          fever: new FormControl(exam.fever)
        }),
        new FormGroup({
          other: new FormControl(exam.other)
        })
      ]),
      shareReplay(1)
    );
  }

  public onNextAction(): void {
    this.form$.pipe(first()).subscribe(
      form => this.updateExam(form)
    );
  }

  public onSubmit(): void {
    this.form$.pipe(first()).subscribe(
      form => this.updateExam(form)
    );
  }

  private updateExam(form: FormGroup[]): void {
    const exam = {
      // TODO: use something normal
      date: new Date().toString(),
      workplace: form[0].controls['workplace'].value,
      cough: form[1].controls['cough'].value,
      breathShortness: form[2].controls['breathShortness'].value,
      fever: form[3].controls['fever'].value,
      other: form[4].controls['other'].value,
    };
    this.examService.setExam(exam);

  }
}
