import { Resolver, Query, ClassType, ObjectType, Field, Authorized, Ctx } from 'type-graphql';

import PaginatedResponse from '../common/paginateResponse.type';

import { Context } from '../authorization';

import { Article } from './article.type';

import { PaginatedArticleResponse } from './paginated-article.type';
import { ArticlesService } from './articles.service';

@Resolver(Article)
export class ArticleResolver {
  constructor(
    private readonly articlesService: ArticlesService,
  ){}

  // @Authorized()
  @Query(() => PaginatedArticleResponse)
  async getArticles(
    @Ctx() ctx: Context
  ): Promise<PaginatedArticleResponse> {
    const { apiToken } = ctx;
    return this.articlesService.getArticles(apiToken);
  }

  @Query(returns => String)
  getHello(){return 'hello';}
}

export default ArticleResolver;