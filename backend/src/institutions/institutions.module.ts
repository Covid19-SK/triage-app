import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Institution } from 'src/institutions/institution.model';
import { InstitutionsController } from './institutions.controller';
import { InstitutionsService } from './institutions.service';

@Module({
  imports: [SequelizeModule.forFeature([Institution])],
  controllers: [InstitutionsController],
  providers: [InstitutionsService],
  exports: [InstitutionsService],
})
export class InstitutionsModule {}
