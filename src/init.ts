import pg from 'pg';
import { pgConfig } from './config/db/postgres/postgres';

export const pool = new pg.Pool(pgConfig);
