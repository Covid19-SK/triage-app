import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PatientDto } from 'src/patients/patient.dto';
import {CreatePatientDto, Patient} from './patient.model';

@Injectable()
export class PatientsService {
  constructor(@InjectModel(Patient) private patient: typeof Patient) {}

  async findAll(): Promise<PatientDto[]> {
    const patients = this.patient.findAll();
    return patients.map(p => CreatePatientDto(p));
  }

  async find(id: string): Promise<PatientDto> {
    const patient = await this.patient.findByPk(id);
    if (!patient) {
      throw new HttpException('No patient found.', HttpStatus.NOT_FOUND);
    }
    return CreatePatientDto(patient);
  }

  async create(dto: PatientDto): Promise<Patient> {
    const patient = new Patient();
    patient.firstName = dto.firstName;
    patient.lastName = dto.lastName;
    patient.dateOfBirth = dto.dateOfBirth;
    patient.phoneNumber = dto.phoneNumber;
    patient.identificationNumber = dto.identificationNumber;
    patient.email = dto.email;
    patient.address = dto.address;
    patient.town = dto.town;
    patient.zipCode = dto.zipCode;
    return patient.save();
  }

  async update(id: string, dto: PatientDto): Promise<PatientDto> {
    const patient = await this.patient.findByPk(id);
    if (!patient) {
      throw new HttpException('No patient found.', HttpStatus.NOT_FOUND);
    }
    patient.firstName = dto.firstName || patient.firstName;
    patient.lastName = dto.lastName || patient.lastName;
    patient.dateOfBirth = dto.dateOfBirth || patient.dateOfBirth;
    patient.phoneNumber = dto.phoneNumber || patient.phoneNumber;
    patient.identificationNumber =
      dto.identificationNumber || patient.identificationNumber;
    patient.email = dto.email || patient.email;
    patient.address = dto.address || patient.address;
    patient.town = dto.town || patient.town;
    patient.zipCode = dto.zipCode || patient.zipCode;

    try {
      const patient2 = await patient.save();
      return CreatePatientDto(patient2);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string): Promise<PatientDto> {
    const patient = await this.patient.findByPk(id);
    await patient.destroy();
    return CreatePatientDto(patient);
  }
}
