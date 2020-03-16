import { Request } from 'express';

interface Context {
  req: Request
  apiToken?: string
}

export default Context;