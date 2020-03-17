import {Country} from "src/countries/country.model";

export class CountryDto {
  name: string;

  constructor(country: Country) {
    this.name = country.name;
  }
}
