import { ObjectType } from 'type-graphql';

import PaginatedResponse from '../common/paginateResponse.type';

import Alert from './alert.type';

@ObjectType()
export class PaginatedAlertsResponse extends PaginatedResponse(Alert){}
export default PaginatedAlertsResponse;