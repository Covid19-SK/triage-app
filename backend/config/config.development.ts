import { SequelizeModuleOptions } from '@nestjs/sequelize';

const database: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '../db.sqlite',
  autoLoadModels: true,
  synchronize: false,
};

export const config = {
  database,
};
