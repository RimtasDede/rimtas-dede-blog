import express from 'express';

import articlesController from '../controllers/articles.controller';

export class ArticlesRoutes {

  configure(): express.Router {
    const router = express.Router();

    router.route(`/articles`)
      .get(articlesController.getAll);

    router.route(`/articles/:articleSlug`)
      .get(articlesController.get);

    return router;
  }

}
