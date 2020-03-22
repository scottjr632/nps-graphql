import { Resolver, Query, Arg, Args } from 'type-graphql';

import { PaginatedParkResponse } from './paginated-parks.type';
import { ParksService } from './park.service';
import { Park } from './park.type';
import { GenericArgs } from '../services/nps.service';
import { GetParksArgs } from './args.types';

@Resolver(Park)
export class ParkResolver {
  constructor(
    private readonly parksService: ParksService
  ){}
  @Query(() => PaginatedParkResponse)
  async getParks(@Args() {parkCodes, stateCodes, limit, start, q}: GetParksArgs)
      : Promise<PaginatedParkResponse> {
 
    let args: GenericArgs = {
      parkCodes,
      stateCodes,
      limit,
      start,
      q
    }
    return this.parksService.getParks(args);
  }
}

export default ParkResolver;