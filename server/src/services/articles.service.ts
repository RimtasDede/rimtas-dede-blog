import { AppDataSource } from '../data-source';
import { Article } from '../entity';


class ArticlesService {

  async getAll(): Promise<Article[]> {
    const res = await AppDataSource.manager.find(Article);

    return res;
  }

  async get(slug: string): Promise<Article> {
    const res = await AppDataSource.manager.findOneBy(Article, { slug });

    return res;
  }

  async save(data: any): Promise<null> {
    const article = new Article();

    Object.assign(article, data);

    await AppDataSource.manager.save(article);

    return null;
  }


}

export default new ArticlesService();
