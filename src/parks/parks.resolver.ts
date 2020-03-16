import { Resolver, Query } from 'type-graphql';

import { PaginatedParkResponse } from './paginated-parks.type';
import { ParksService } from './park.service';
import { Park } from './park.type';

@Resolver(Park)
export class ParkResolver {
  constructor(
    private readonly parksService: ParksService
  ){}
  @Query(() => PaginatedParkResponse)
  async getParks(): Promise<PaginatedParkResponse> {
    return this.parksService.getParks();
  }
}

export default ParkResolver;