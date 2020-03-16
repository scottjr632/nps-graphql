import { Service } from 'typedi';

import { NpsService } from '../services/nps.service';
import { GenericArgs } from '../services/nps.service';

import { PaginatedArticleResponse } from './paginated-article.type';

@Service()
export class ArticlesService extends NpsService {
  async getArticles(apiToken: string, args?: GenericArgs): Promise<PaginatedArticleResponse> {
    return this.get('/articles', apiToken, args);
  }
}