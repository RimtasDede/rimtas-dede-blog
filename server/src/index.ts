import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as bodyParser from 'body-parser';

import { AppDataSource } from './data-source';
import routes from './routes';
import articlesService from './services/articles.service';

// init env variables
dotenv.config();

const port = process.env.PORT;


AppDataSource.initialize().then(async (dataSource) => {
  // start express app
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  // register all api routes
  routes.forEach(r => app.use('/api', r));

  // start express server
  app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
  });

  // dataSource.manager.query(`SET time zone UTC`).then(
  //   ok => console.log('ok', ok),
  //   neok => console.log('neok', neok),
  // );


  const result = await articlesService.save({
    slug: 'slug-test',
    title: 'title-test',
    intro: 'intro-test',
    text: 'text-test',
    tags: 'tag,tag2,tag3',
    mainImage: null,
  });

}).catch(error => console.log(error));
