import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'institutions' })
export class Institution extends Model<Institution> {
  @AllowNull(false)
  @Column
  name: string;
}
