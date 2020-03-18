import {Body, Controller, Delete, Get, Param, Post, Put, Req} from '@nestjs/common';
import {ExaminationDto} from 'src/examinations/examinations.dto';
import {Examination} from 'src/examinations/examinations.model';
import {ExaminationsService} from 'src/examinations/examinations.service';

@Controller('examinations')
export class ExaminationsController {
  constructor(private readonly examinationsService: ExaminationsService) {}

  @Get()
  getAll(): Promise<ExaminationDto[]> {
    return this.examinationsService.findAll();
  }

  @Post()
  create(
    @Body() examinationDto: ExaminationDto,
    @Req() request,
  ): Promise<Examination> {
    return this.examinationsService.create(examinationDto);
  }

  @Delete(':id')
  delete(
      @Param('id') id: string,
      @Req() request,
  ): Promise<ExaminationDto> {
    return this.examinationsService.delete(id);
  }

  @Put(':id')
  update(
      @Param('id') id: string,
      @Body() dto: ExaminationDto,
      @Req() request,
  ): Promise<ExaminationDto> {
    return this.examinationsService.update(id, dto);
  }
}
