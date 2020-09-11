import express from 'express';
import {
  userController,
} from './init';

const app = express();
const port = process.env.EXPRESS_PORT || 3000;

app.use('/users', userController.getRouter());

app.get('/hello-world', async (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`server listening at ${port}`);
});
