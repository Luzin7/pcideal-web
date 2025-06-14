import { createApiClient } from '../../lib/createApiClient';

const apiUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : process.env.NEXT_PUBLIC_PCIDEAL_URL;

const pcIdealApiClient = createApiClient({
  baseURL: apiUrl,
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' },
  includeAuthTokens: false,
});

export default pcIdealApiClient;
