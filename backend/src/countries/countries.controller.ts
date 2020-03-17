import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CountriesService } from 'src/countries/countries.service';
import { CountryDto } from 'src/countries/country.dto';
import { Country } from 'src/countries/country.model';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  getAll(): Promise<CountryDto[]> {
    return this.countriesService.findAll();
  }

  @Post()
  create(@Body() countryDto: CountryDto, @Req() request): Promise<Country> {
    return this.countriesService.create(countryDto);
  }
}
