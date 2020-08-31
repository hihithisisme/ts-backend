import pg from 'pg';
import { pool } from '../../../init';

interface IpgConfig {
  user: string,
  password: string,
  database: string,
  host: string,
  port: number,
}

export const pgConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
} as unknown as IpgConfig;

async function getClient(pool: pg.Pool): Promise<pg.PoolClient> {
  const client = await pool.connect();
  return client;
}

export async function execAndCommit(query: string, value: any[]): Promise<pg.QueryResult> {
  const client = await getClient(pool);

  try {
    await client.query('BEGIN');
    const result = await client.query(query, value);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}
