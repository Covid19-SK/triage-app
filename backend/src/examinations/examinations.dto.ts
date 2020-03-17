import { Examination } from 'src/examinations/examinations.model';
import { Classification } from 'src/shared/enum/classification';

export class ExaminationDto {
  id: string;
  patientId: string;
  institutionId: number;
  cough: Classification;
  breathShortness: Classification;
  fever: Classification;
  other: string;
  abroad: boolean;
  illPersonContact: boolean;
  covid19Contact: boolean;

  constructor(examination: Examination) {
    this.id = examination.id;
    this.patientId = examination.patientId;
    this.institutionId = examination.institutionId;
    this.cough = examination.cough;
    this.breathShortness = examination.breathShortness;
    this.fever = examination.fever;
    this.other = examination.other;
    this.abroad = examination.abroad;
    this.illPersonContact = examination.illPersonContact;
    this.covid19Contact = examination.covid19Contact;
  }
}
