import { DataSource } from 'typeorm';
import 'reflect-metadata';
import dotenv from 'dotenv';

import * as Entities from './entity';

// init env variables
dotenv.config();

const prod = process.env.PRODUCTION === 'true';
const pgUser = process.env.PGUSER;
const pgHost = process.env.PGHOST;
const pgPassword = process.env.PGPASSWORD;
const pgDatabase = process.env.PGDATABASE;
const pgPort = parseInt(process.env.PGPORT);

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: pgHost,
  port: pgPort,
  username: pgUser,
  password: pgPassword,
  database: pgDatabase,
  synchronize: !prod,
  logging: false,
  entities: Entities,
  migrations: [],
  subscribers: [],
});
