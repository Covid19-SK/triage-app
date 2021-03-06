import {
  AllowNull,
  BeforeCreate,
  Column,
  HasMany,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import {Examination} from 'src/examinations/examinations.model';
import {PatientDto} from "./patient.dto";

const { v4: uuidv4 } = require('uuid');

export function CreatePatientDto(patient: Patient): PatientDto {
  return patient;
}

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
  @Column
  dateOfBirth: string;

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

  @HasMany(() => Examination)
  examinations: Examination[];
}
