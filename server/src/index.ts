import express from 'express';
import dotenv from 'dotenv';
import * as bodyParser from 'body-parser';

import { AppDataSource } from './data-source';
import routes from './routes';

// init env variables
dotenv.config();

const port = process.env.PORT;


AppDataSource.initialize().then(async () => {
  // start express app
  const app = express();

  app.use(bodyParser.json());

  // register all api routes
  routes.forEach(r => app.use('/api', r));

  // start express server
  app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
  });
}).catch(error => console.log(error));
