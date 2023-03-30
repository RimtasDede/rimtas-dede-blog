import { AppDataSource } from '../data-source';
import { Article } from '../entity';


class ArticlesService {

  async getAll(): Promise<Article[]> {
    const res = await AppDataSource.manager.find(Article);

    return res;
  }

  async get(id: number): Promise<Article> {
    const res = await AppDataSource.manager.findOneBy(Article, { id });

    return res;
  }

}

export default new ArticlesService();
