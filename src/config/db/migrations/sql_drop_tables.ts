import { db } from '../../../init';

export async function dropTables() {
  await db.execAndCommit(`
    DROP TABLE IF EXISTS messages;
    DROP TABLE IF EXISTS conversations;
    DROP TABLE IF EXISTS participants;
    DROP TABLE IF EXISTS channels;
    DROP TABLE IF EXISTS users;
  `, []);
}
