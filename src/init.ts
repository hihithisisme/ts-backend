// eslint-disable-next-line no-unused-vars
import { PostgresDB, IpgConfig } from './config/db/postgres';
import {
  UserController,
} from './controller';
import {
  UserService,
} from './service';
import {
  UserRepository,
} from './repository';

const pgConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
} as unknown as IpgConfig;

export const db = new PostgresDB(pgConfig);

export const userRepo = new UserRepository(db);
export const userService = new UserService(userRepo);
export const userController = new UserController(userService);
