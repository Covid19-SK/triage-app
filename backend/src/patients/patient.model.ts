import {
  AllowNull,
  Column,
  DataType,
  IsEmail,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({ tableName: 'patients' })
export class Patient extends Model<Patient> {
  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @AllowNull(false)
  @Column({ type: DataType.DATEONLY })
  dateOfBirth: Date;

  @AllowNull(false)
  @Column
  phoneNumber: string;

  @Unique
  @Column
  identificationNumber: string;

  @IsEmail
  @Column
  email: string;

  @Column
  address: string;

  @Column
  town: string;

  @Column
  zipCode: string;
}
