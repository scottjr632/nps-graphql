import { ObjectType } from 'type-graphql';

import PaginatedResponse from '../common/paginateResponse.type';

import { Article } from './article.type';

@ObjectType()
export class PaginatedArticleResponse extends PaginatedResponse(Article){}
export default PaginatedArticleResponse;
