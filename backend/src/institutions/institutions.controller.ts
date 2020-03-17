import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { InstitutionDto } from 'src/institutions/institution.dto';
import { Institution } from 'src/institutions/institution.model';
import { InstitutionsService } from 'src/institutions/institutions.service';

@Controller('institutions')
export class InstitutionsController {
  constructor(private readonly institutionsService: InstitutionsService) {}

  @Get()
  getAll(): Promise<InstitutionDto[]> {
    return this.institutionsService.findAll();
  }

  @Post()
  create(
    @Body() institutionDto: InstitutionDto,
    @Req() request,
  ): Promise<Institution> {
    return this.institutionsService.create(institutionDto);
  }
}
