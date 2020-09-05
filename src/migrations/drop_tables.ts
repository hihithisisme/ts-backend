import { execAndCommit } from '../config/db/postgres/postgres'

export async function dropTables() {
  await execAndCommit(`
    DROP TABLE IF EXISTS messages;
    DROP TABLE IF EXISTS conversations;
    DROP TABLE IF EXISTS participants;
    DROP TABLE IF EXISTS channels;
    DROP TABLE IF EXISTS users;
  `, []);
}
