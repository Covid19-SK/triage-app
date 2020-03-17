import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CountryDto } from './country.dto';
import { Country } from './country.model';

@Injectable()
export class CountriesService {
  constructor(@InjectModel(Country) private country: typeof Country) {}

  async findAll(): Promise<CountryDto[]> {
    const countrys = this.country.findAll();
    return countrys.map(p => new CountryDto(p));
  }

  async find(id: string): Promise<CountryDto> {
    const country = await this.country.findByPk(id);
    if (!country) {
      throw new HttpException('No country found.', HttpStatus.NOT_FOUND);
    }
    return new CountryDto(country);
  }

  async create(dto: CountryDto): Promise<Country> {
    const country = new Country();
    country.name = dto.name;
    return country.save();
  }

  async update(id: string, dto: CountryDto): Promise<CountryDto> {
    const country = await this.country.findByPk(id);
    if (!country) {
      throw new HttpException('No country found.', HttpStatus.NOT_FOUND);
    }
    country.name = dto.name || country.name;

    try {
      const country2 = await country.save();
      return new CountryDto(country2);
    } catch (err) {
      throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string): Promise<CountryDto> {
    const country = await this.country.findByPk(id);
    await country.destroy();
    return new CountryDto(country);
  }
}
