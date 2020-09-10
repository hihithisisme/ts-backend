import { DB } from '../config/db/db';

export class UserRepository {
  private db: DB;

  constructor(db: DB) {
    this.db = db;
  }
}
