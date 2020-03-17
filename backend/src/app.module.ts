import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from 'src/shared/config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { ExaminationsModule } from './examinations/examinations.module';
import { InstitutionsModule } from './institutions/institutions.module';
import { PatientsModule } from './patients/patients.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      useClass: ConfigService,
    }),
    SharedModule,

    CountriesModule,
    ExaminationsModule,
    InstitutionsModule,
    PatientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
