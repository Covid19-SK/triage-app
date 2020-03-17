import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { ExaminationDto } from 'src/examinations/examinations.dto';
import { Examination } from 'src/examinations/examinations.model';
import { ExaminationsService } from 'src/examinations/examinations.service';

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
}
