import { IpgConfig, postgresDB } from './config/db/db';

const pgConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
} as unknown as IpgConfig;

export const db = new postgresDB(pgConfig);
