import {Component} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Institution} from '../../../shared/institution';
import {InstitutionsService} from '../../../shared/institutions.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first, map, shareReplay, switchMap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {isNil} from "lodash-es";

@Component({
  selector: 'app-institutions',
  templateUrl: './institution-detail.component.html',
  styleUrls: ['institution-detail.scss']
})
export class InstitutionDetailComponent {
  public form$: Observable<FormGroup>;
  constructor(
    private institutionsService: InstitutionsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form$ = this.route.paramMap.pipe(
      switchMap(paramMap => {
        const institutionId = paramMap.get('institutionId');
        if (institutionId === 'new') {
          return of({
            id: undefined,
            name: '',
          });
        }
        return this.institutionsService.getById(paramMap.get('institutionId'))
      }),
      map(institution => new FormGroup({
        id: new FormControl(institution.id),
        name: new FormControl(institution.name),
      })),
      shareReplay(1)
    );
  }

  public onSubmit(): void {
    this.form$.pipe(first()).subscribe(
      form => {
        if (isNil(form.value['id'])) {
          this.institutionsService.create({
            id: undefined,
            name: form.value['name']
          });
        } else {
          this.institutionsService.update({
            id: form.value['id'],
            name: form.value['name']
          });
        }
        this.router.navigate(['/admin/institutions']);
      }
    );
  }
}
