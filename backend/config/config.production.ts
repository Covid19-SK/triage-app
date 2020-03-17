import { SequelizeModuleOptions } from '@nestjs/sequelize';

const database: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  logging: false,
  autoLoadModels: true,
  synchronize: false,
};

export const config = {
  database,
};
