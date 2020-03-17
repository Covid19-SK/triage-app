import { AllowNull, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Examination } from 'src/examinations/examinations.model';

@Table({ tableName: 'institutions' })
export class Institution extends Model<Institution> {
  @AllowNull(false)
  @Column
  name: string;

  @HasMany(() => Examination)
  examinations: Examination[];
}
