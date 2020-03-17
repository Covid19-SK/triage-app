import { Patient } from 'src/patients/patient.model';

export class PatientDto {
  // id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phoneNumber: string;
  identificationNumber: string;
  email: string;
  address: string;
  town: string;
  zipCode: string;

  constructor(patient: Patient) {
    this.firstName = patient.firstName;
    this.lastName = patient.lastName;
    this.dateOfBirth = patient.dateOfBirth;
    this.phoneNumber = patient.phoneNumber;
    this.identificationNumber = patient.identificationNumber;
    this.email = patient.email;
    this.address = patient.address;
    this.town = patient.town;
    this.zipCode = patient.zipCode;
  }
}
