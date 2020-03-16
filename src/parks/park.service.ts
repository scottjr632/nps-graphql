import { Service } from 'typedi';

import { NpsService, GenericArgs } from './../services/nps.service';
import PaginatedParkResponse from './paginated-parks.type';

@Service()
export class ParksService extends NpsService {
  async getParks(args?: GenericArgs): Promise<PaginatedParkResponse> {
    return this.get('/parks', '', args);
  }
}

export default ParksService;