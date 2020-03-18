import { Component } from '@angular/core';
import { Institution } from '../../shared/institution';
import { Observable } from 'rxjs';
import { InstitutionsService } from '../../shared/institutions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['institutions.scss'],
})
export class InstitutionsComponent {
  public institutions$: Observable<Institution[]> = this.institutionsService
    .institutions$;
  constructor(
    private institutionsService: InstitutionsService,
    private router: Router,
  ) {}

  public onDeleteClick(institutionId: string): void {
    this.institutionsService.delete(institutionId);
  }
}
