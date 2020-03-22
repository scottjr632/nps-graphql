import Axios from 'axios';

const BASE_URL = 'https://api.nps.gov/api/v1';

export interface GenericArgs {
  parkCodes?: string[]
  stateCodes?: string[]
  limit?: number
  start?: number
  q?: string
}

const buildQueryString = ({
  parkCodes,
  stateCodes,
  limit,
  start,
  q,
}: GenericArgs): string => {
  let queryString = '';

  queryString += parkCodes ? `&parkCode=` + parkCodes.join('%2C') : ''

  queryString += stateCodes ? `&stateCode=` + stateCodes.join('%2C') : ''
  
  queryString += limit ? `&limit=${limit}` : '';
  queryString += start ? `&start=${start}` : '';
  queryString += q ? `&q=${q}` : '';
  return queryString;
};

export class NpsService {
  async get<T>(path: string, apiToken: string, args?: GenericArgs): Promise<T> {
    const res = await Axios.get<T>(`${BASE_URL}${path}?api_key=${apiToken}${args && buildQueryString(args)}`);
    return res.data;
  }
}

export default NpsService;