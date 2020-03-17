import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Examination } from 'src/examinations/examinations.model';
import { ExaminationsController } from './examinations.controller';
import { ExaminationsService } from './examinations.service';

@Module({
  imports: [SequelizeModule.forFeature([Examination])],
  controllers: [ExaminationsController],
  providers: [ExaminationsService],
  exports: [ExaminationsService],
})
export class ExaminationsModule {}
