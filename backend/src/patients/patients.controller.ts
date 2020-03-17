import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { PatientDto } from 'src/patients/patient.dto';
import { Patient } from 'src/patients/patient.model';
import { PatientsService } from 'src/patients/patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  getAll(): Promise<PatientDto[]> {
    return this.patientsService.findAll();
  }

  @Post()
  create(@Body() patientDto: PatientDto, @Req() request): Promise<Patient> {
    return this.patientsService.create(patientDto);
  }
}
