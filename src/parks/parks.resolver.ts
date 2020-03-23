import { Resolver, Query, Arg, Args } from 'type-graphql';

import { GenericArgs } from '../services/nps.service';

import { GetParksArgs } from '../types/args.types';

import { PaginatedParkResponse } from './paginated-parks.type';
import { ParksService } from './park.service';
import { Park } from './park.type';

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
      q,
    };
    return this.parksService.getParks(args);
  }
}

export default ParkResolver;