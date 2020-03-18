import { AllowNull, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Examination } from 'src/examinations/examinations.model';
import { InstitutionDto } from "./institution.dto";

export function CreateInstitutionDto(institution: Institution): InstitutionDto {
  return {
    id: institution.id,
    name: institution.name
  };
}

@Table({ tableName: 'institutions' })
export class Institution extends Model<Institution> {
  @AllowNull(false)
  @Column
  name: string;

  @HasMany(() => Examination)
  examinations: Examination[];
}
