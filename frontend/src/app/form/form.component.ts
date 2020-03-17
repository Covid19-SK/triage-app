import {Component} from '@angular/core';
import {first, map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {ExamService} from '../shared/exam.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['form.scss']
})
export class FormComponent {
  public form$: Observable<FormGroup>;

  constructor(private examService: ExamService) {
    this.form$ = this.examService.exam$.pipe(
      map(exam => new FormGroup({
          institution: new FormControl(exam.institution),
          cough: new FormControl(exam.cough),
          breathShortness: new FormControl(exam.breathShortness),
          fever: new FormControl(exam.fever),
          other: new FormControl(exam.other),
        })
      ),
      shareReplay(1)
    );
  }

  public onSubmit(): void {
    this.form$.pipe(first()).subscribe(
      form => {
        this.examService.setExam({
          // TODO: use something normal
          date: new Date().toString(),
          institution: form.value['institution'],
          cough: form.value['cough'],
          breathShortness: form.value['breathShortness'],
          fever: form.value['fever'],
          other: form.value['other'],
        });
      }
    );
  }
}
