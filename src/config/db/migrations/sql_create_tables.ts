import { db } from '../../../init';

createTables();

export async function createTables(): Promise<void> {
  await db.execAndCommit(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE OR REPLACE FUNCTION update_updated_column()
          RETURNS TRIGGER AS '
    BEGIN
      NEW.updated = NOW();
      RETURN NEW;
    END;
  ' LANGUAGE 'plpgsql';
  `, []);

  await createUserTable();
  await createChannelTable();
  await createConvoTable();
  await createMessageTable();
  await createParticipantTable();
}

export async function createUserTable(): Promise<void> {
  await db.execAndCommit(`
    CREATE TABLE users (
      id uuid NOT NULL DEFAULT uuid_generate_v4(),
      handle varchar NULL,
      display_name varchar NOT NULL,
      "password" varchar NOT NULL,
      CONSTRAINT users_pk PRIMARY KEY (id)
    );
  `, []);
}

export async function createConvoTable(): Promise<void> {
  await db.execAndCommit(`
    CREATE TABLE conversations (
      id uuid NOT NULL DEFAULT uuid_generate_v4(),
      channel_id uuid NOT NULL,
      CONSTRAINT conversations_pk PRIMARY KEY (id),
      CONSTRAINT conversations_fk FOREIGN KEY (channel_id) REFERENCES channels(id) ON UPDATE CASCADE ON DELETE RESTRICT
    );
  `, []);
}

export async function createChannelTable(): Promise<void> {
  await db.execAndCommit(`
    CREATE TABLE channels (
      id uuid NOT NULL DEFAULT uuid_generate_v4(),
      description varchar NULL,
      pinned_messages_ids _uuid NULL,
      CONSTRAINT channels_pk PRIMARY KEY (id)
    );
  `, []);
}

async function createParticipantTable(): Promise<void> {
  await db.execAndCommit(`
    CREATE TABLE participants (
      channel_id uuid NOT NULL,
      user_id uuid NOT NULL,
      CONSTRAINT participants_channels_fk FOREIGN KEY (channel_id) REFERENCES channels(id) ON UPDATE CASCADE ON DELETE RESTRICT,
      CONSTRAINT participants_users_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
    );
  `, []);
}

export async function createMessageTable(): Promise<void> {
  await db.execAndCommit(`
    CREATE TABLE messages (
      id uuid NOT NULL DEFAULT uuid_generate_v4(),
      conversation_id uuid NOT NULL,
      from_id uuid NOT NULL,
      message varchar NOT NULL,
      created timestamptz NULL DEFAULT now(),
      updated timestamptz NULL DEFAULT now(),
      CONSTRAINT messages_pk PRIMARY KEY (id),
      CONSTRAINT messages_fk FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON UPDATE CASCADE ON DELETE RESTRICT,
      CONSTRAINT messages_users_fk FOREIGN KEY (from_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
    );
    CREATE TRIGGER update_updated_messages
      BEFORE UPDATE
        ON messages FOR EACH ROW 
      EXECUTE PROCEDURE update_updated_column();
  `, []);
}
