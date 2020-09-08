require('./init');
import express from 'express';
import { createTables, dropTables } from './config/db/migrations'

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.get('/hello-world', async (req, res) => {
  res.send('Hello world!');
});

app.get('/test-down', async (req, res) => {
  dropTables();
  res.send('done');
});

app.get('/test-up', async (req, res) => {
  createTables();
  res.send('done');
});

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
