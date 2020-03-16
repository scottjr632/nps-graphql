import { Request } from 'express';
import { AuthChecker } from 'type-graphql';

import Context from './context';

export const authChecker: AuthChecker<Context> = async ({ context }) => {
  const apiToken = context.req.headers['api-token'];
  if (!apiToken) {
    return false;
  }

  context.apiToken = apiToken.toString();
  return true;
};

export default authChecker;