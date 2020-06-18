/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

import './lib/env';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(process.env.API_PORT, () => {
  console.log(`🚀 Server is running on port ${process.env.API_PORT}!`);
});
