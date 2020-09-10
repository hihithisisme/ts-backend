import { db } from '../../../init';

dropTables();

export async function dropTables(): Promise<void> {
  await db.execAndCommit(`
    DROP TABLE IF EXISTS messages;
    DROP TABLE IF EXISTS conversations;
    DROP TABLE IF EXISTS participants;
    DROP TABLE IF EXISTS channels;
    DROP TABLE IF EXISTS users;
  `, []);
}
