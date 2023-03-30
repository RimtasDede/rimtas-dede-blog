import express from 'express';

import articlesService from '../services/articles.service';


class ArticlesController {

  async getAll(req: express.Request, res: express.Response) {
    const result = await articlesService.getAll();

    res.status(200).send(result);
  }

  async get(req: express.Request, res: express.Response) {
    const id = +req.params.articleId;
    const result = await articlesService.get(id);

    res.status(200).send(result);
  }

}

export default new ArticlesController();
