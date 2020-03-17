import { Institution } from 'src/institutions/institution.model';

export class InstitutionDto {
  name: string;

  constructor(institution: Institution) {
    this.name = institution.name;
  }
}
