import { Component } from '@angular/core';
import { first, map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { ExamService } from '../shared/exam.service';
import { faChevronLeft, faDiagnoses } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['form.scss'],
})
export class FormComponent {
  public form$: Observable<FormGroup[]>;
  public icon = faDiagnoses;
  public backIcon = faChevronLeft;

  constructor(private examService: ExamService, private router: Router) {
    this.form$ = this.examService.exam$.pipe(
      map(exam => [
        new FormGroup({
          institutionId: new FormControl(exam.institutionId),
        }),
        new FormGroup({
          cough: new FormControl(exam.cough),
        }),
        new FormGroup({
          breathShortness: new FormControl(exam.breathShortness),
        }),
        new FormGroup({
          fever: new FormControl(exam.fever),
        }),
        new FormGroup({
          other: new FormControl(exam.other),
        }),
        new FormGroup({
          abroad: new FormControl(this.convertBoolToValue(exam.abroad)),
        }),
        new FormGroup({
          illPersonContact: new FormControl(
            this.convertBoolToValue(exam.illPersonContact),
          ),
        }),
        new FormGroup({
          covid19Contact: new FormControl(
            this.convertBoolToValue(exam.covid19Contact),
          ),
        }),
      ]),
      shareReplay(1),
    );
  }

  private convertValueToBool(val: string): boolean {
    return val === 'yes';
  }

  private convertBoolToValue(bool: boolean): string {
    return bool ? 'yes' : 'no';
  }

  public onNextAction(): void {
    this.form$.pipe(first()).subscribe(form => this.updateExam(form));
  }

  public onSubmit(): void {
    this.form$.pipe(first()).subscribe(form => this.updateExam(form));
  }

  private updateExam(form: FormGroup[]): void {
    const exam = {
      institutionId: form[0].controls['institutionId'].value,
      cough: form[1].controls['cough'].value,
      breathShortness: form[2].controls['breathShortness'].value,
      fever: form[3].controls['fever'].value,
      other: form[4].controls['other'].value,
      abroad: this.convertValueToBool(form[5].controls['abroad'].value),
      illPersonContact: this.convertValueToBool(
        form[6].controls['illPersonContact'].value,
      ),
      covid19Contact: this.convertValueToBool(
        form[7].controls['covid19Contact'].value,
      ),
    };
    this.examService.setExam(exam);
  }

  public backToRegistration() {
    this.router.navigateByUrl('/registration');
  }
}
