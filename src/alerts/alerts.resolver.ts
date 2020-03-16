import { Resolver, Query, Ctx } from 'type-graphql';

import { Context } from '../authorization';

import { Alert } from './alert.type';
import { PaginatedAlertsResponse } from './paginated-alert.type';
import { AlertsService } from './alerts.service';

@Resolver(Alert)
export class AlertResolver {
  constructor(
    private readonly alertsService: AlertsService,
  ){}

  @Query(returns => PaginatedAlertsResponse)
  async getAlerts(
  @Ctx() ctx: Context
  ) {
    const { apiToken } = ctx;
    return this.alertsService.getAlerts(apiToken);
  }
}

export default AlertResolver;