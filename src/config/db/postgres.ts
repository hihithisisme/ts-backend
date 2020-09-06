import pg from 'pg';
import { db } from './db';

export interface IpgConfig {
  user: string,
  password: string,
  database: string,
  host: string,
  port: number,
}

export class postgresDB extends db {
  config: IpgConfig;
  // ! is the non-null assertion operator to stop TS from complaining.
  pool!: pg.Pool;

  public async connect(config: IpgConfig): Promise<void> {
    try {
      const pool = new pg.Pool(config);
      this.pool = pool;
    } catch (err) {
      console.error('Unable to connect to DB', err, config);
    }
  }

  public async execAndCommit(query: string, value: any []): Promise<pg.QueryResult> {
    const client = await this.getClient();
    try {
      await client.query('BEGIN');
      // Uncomment the line below to view the queries being sent in console
      // console.debug(query,value);
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
  
  private async getClient(): Promise<pg.PoolClient> {
    try {
      const client = await this.pool.connect();
      return client;
    } catch (err) {
      console.error('Unable to connect to postgres pool', err);
      throw err;
    }
  }

  constructor(config: IpgConfig) {
    super(config);
    this.config = config;
  };
}