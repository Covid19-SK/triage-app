import {
  AllowNull,
  BeforeCreate,
  Column,
  DataType,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
const { v4: uuidv4 } = require('uuid');

@Table({ tableName: 'patients' })
export class Patient extends Model<Patient> {
  @IsUUID(4)
  @PrimaryKey
  @Unique
  @Column
  id: string;

  @BeforeCreate
  static createId(instance: Patient) {
    instance.id = uuidv4();
  }

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
