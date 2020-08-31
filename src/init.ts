import pg from 'pg';
import { pgConfig, execAndCommit } from './config/db/postgres/postgres';

export const pool = new pg.Pool(pgConfig);
