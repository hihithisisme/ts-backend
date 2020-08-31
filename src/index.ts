import { execAndCommit } from './config/db/postgres/postgres';

(async () => {
  
  console.log('drop');
  try {
    await execAndCommit(`
    DROP TABLE newtable;`,[]);
  } catch (err) {
    console.log("ah wells, no table to drop")
  }
  console.log('create');
  await execAndCommit(`
    CREATE TABLE newtable (
      test varchar NULL
    );`, []
  );
  console.log('done');
})();
