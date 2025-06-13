import { getAccessToken, getRefreshToken } from '@/helpers/getToken';
import axios, { CreateAxiosDefaults } from 'axios';

export function createApiClient({
  includeAuthTokens,
  ...axiosConfig
}: { includeAuthTokens?: boolean } & CreateAxiosDefaults) {
  const client = axios.create(axiosConfig);

  if (includeAuthTokens) {
    client.interceptors.request.use(async (config) => {
      const [accessToken, refreshToken] = await Promise.all([
        getAccessToken(),
        getRefreshToken(),
      ]);

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      if (refreshToken) {
        config.headers.refresh_token = refreshToken;
      }

      return config;
    });
  }

  return client;
}
