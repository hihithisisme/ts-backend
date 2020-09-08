export abstract class DB {
  abstract async connect(config: object): Promise<void>;

  constructor(config: object) {
    this.connect(config);
  }
}

export { IpgConfig, PostgresDB } from './postgres';
