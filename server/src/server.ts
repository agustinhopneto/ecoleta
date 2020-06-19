/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate';
import routes from './routes';

import './lib/env';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());

app.listen(process.env.API_PORT, () => {
  console.log(
    `🚀 Server is running on ${process.env.API_URL}:${process.env.API_PORT}`,
  );
});
