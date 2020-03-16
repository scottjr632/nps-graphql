import { ObjectType } from 'type-graphql';

import PaginatedResponse from '../common/paginateResponse.type';

import { Park } from './park.type';

@ObjectType()
export class PaginatedParkResponse extends PaginatedResponse(Park){}
export default PaginatedParkResponse;
