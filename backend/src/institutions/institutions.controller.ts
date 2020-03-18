import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
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

  @Delete(':id')
  delete(
      @Param('id') institutionId: string,
      @Req() request,
  ): Promise<InstitutionDto> {
    return this.institutionsService.delete(institutionId);
  }

  @Put(':id')
  update(
      @Param('id') institutionId: string,
      @Body() institutionDto: InstitutionDto,
      @Req() request,
  ): Promise<InstitutionDto> {
    return this.institutionsService.update(institutionId, institutionDto);
  }
}
