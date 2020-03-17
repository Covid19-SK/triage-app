import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'countries' })
export class Country extends Model<Country> {
  @AllowNull(false)
  @Column
  name: string;
}
