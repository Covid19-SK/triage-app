import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ExaminationDto } from 'src/examinations/examinations.dto';
import { Examination } from 'src/examinations/examinations.model';

@Injectable()
export class ExaminationsService {
  constructor(
    @InjectModel(Examination) private examination: typeof Examination,
  ) {}

  async findAll(): Promise<ExaminationDto[]> {
    const examinations = this.examination.findAll();
    return examinations.map(p => new ExaminationDto(p));
  }

  async find(id: string): Promise<ExaminationDto> {
    const examination = await this.examination.findByPk(id);
    if (!examination) {
      throw new HttpException('No examination found.', HttpStatus.NOT_FOUND);
    }
    return new ExaminationDto(examination);
  }

  async create(dto: ExaminationDto): Promise<Examination> {
    const examination = new Examination();
    examination.patientId = dto.patientId;
    examination.institutionId = dto.institutionId;
    examination.cough = dto.cough;
    examination.breathShortness = dto.breathShortness;
    examination.fever = dto.fever;
    examination.other = dto.other;
    examination.abroad = dto.abroad;
    examination.illPersonContact = dto.illPersonContact;
    examination.covid19Contact = dto.covid19Contact;
    return examination.save();
  }

  async update(id: string, dto: ExaminationDto): Promise<ExaminationDto> {
    const examination = await this.examination.findByPk(id);
    if (!examination) {
      throw new HttpException('No examination found.', HttpStatus.NOT_FOUND);
    }
    examination.patientId = dto.patientId || examination.patientId;
    examination.institutionId = dto.institutionId || examination.institutionId;
    examination.cough = dto.cough || examination.cough;
    examination.breathShortness =
      dto.breathShortness || examination.breathShortness;
    examination.fever = dto.fever || examination.fever;
    examination.other = dto.other || examination.other;
    examination.abroad = dto.abroad || examination.abroad;
    examination.illPersonContact =
      dto.illPersonContact || examination.illPersonContact;
    examination.covid19Contact =
      dto.covid19Contact || examination.covid19Contact;

    try {
      const examination2 = await examination.save();
      return new ExaminationDto(examination2);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string): Promise<ExaminationDto> {
    const examination = await this.examination.findByPk(id);
    await examination.destroy();
    return new ExaminationDto(examination);
  }
}
