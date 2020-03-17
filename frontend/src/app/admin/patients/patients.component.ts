import {Component} from '@angular/core';
import {Patient} from '../../shared/patient';
import {Observable} from 'rxjs';
import {PatientsService} from '../../shared/patients.service';

@Component({
  selector: 'app-users',
  templateUrl: './patients.component.html',
  styleUrls: ['patients.scss']
})
export class PatientsComponent {
  public patients$: Observable<Patient[]> = this.patientsService.patients$;

  constructor(private patientsService: PatientsService) {}

  public onDeleteClick(patientId: string): void {
    this.patientsService.delete(patientId);
  }
}
