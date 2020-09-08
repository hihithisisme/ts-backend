export abstract class db {
  abstract async connect(config: object): Promise<void>;
  
  constructor(config: object) {
    this.connect(config);
  }
}

export { IpgConfig, postgresDB } from './postgres';
