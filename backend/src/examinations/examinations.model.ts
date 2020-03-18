import {
  AllowNull,
  BeforeCreate,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { Institution } from 'src/institutions/institution.model';
import { Patient } from 'src/patients/patient.model';
import { Classification } from 'src/shared/enum/classification';
import {ExaminationDto} from "./examinations.dto";

const { v4: uuidv4 } = require('uuid');

export function CreateExaminationDto(examination: Examination): ExaminationDto {
  return examination;
}

@Table({ tableName: 'examinations' })
export class Examination extends Model<Examination> {
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
  @ForeignKey(() => Patient)
  @Column
  patientId: string;

  @BelongsTo(() => Patient)
  patient: Patient;

  @AllowNull(false)
  @ForeignKey(() => Institution)
  @Column
  institutionId: number;

  @BelongsTo(() => Institution)
  institution: Institution;

  @Column({
    type: DataType.ENUM(
      Classification.None,
      Classification.Mild,
      Classification.Severe,
    ),
  })
  cough: Classification;

  @Column({
    type: DataType.ENUM(
      Classification.None,
      Classification.Mild,
      Classification.Severe,
    ),
  })
  breathShortness: Classification;

  @Column({
    type: DataType.ENUM(
      Classification.None,
      Classification.Mild,
      Classification.Severe,
    ),
  })
  fever: Classification;

  @Column
  other: string;

  @Column
  abroad: boolean;

  @Column
  illPersonContact: boolean;

  @Column
  covid19Contact: boolean;
}
