import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {PatientDto} from 'src/patients/patient.dto';
import {Patient} from 'src/patients/patient.model';
import {PatientsService} from 'src/patients/patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  getAll(): Promise<PatientDto[]> {
    return this.patientsService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<PatientDto> {
    return this.patientsService.find(id);
  }

  @Post()
  create(@Body() patientDto: PatientDto, @Req() request): Promise<Patient> {
    return this.patientsService.create(patientDto);
  }

  @Delete(':id')
  delete(
      @Param('id') id: string,
      @Req() request,
  ): Promise<PatientDto> {
    return this.patientsService.delete(id);
  }

  @Put(':id')
  update(
      @Param('id') id: string,
      @Body() dto: PatientDto,
      @Req() request,
  ): Promise<PatientDto> {
    return this.patientsService.update(id, dto);
  }
}
