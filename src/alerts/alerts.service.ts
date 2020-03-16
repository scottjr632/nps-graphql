import { Service } from 'typedi';

import NpsService from '../services/nps.service';
import { GenericArgs } from '../services/nps.service';

import PaginatedAlertsResponse from './paginated-alert.type';

@Service()
export class AlertsService extends NpsService {
  async getAlerts(apiToken: string, args?: GenericArgs): Promise<PaginatedAlertsResponse> {
    return this.get('/alerts', apiToken, args);
  }
}