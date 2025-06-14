import type { AxiosError, AxiosRequestConfig } from 'axios';
import pcIdealApiClient from '../pcIdeal-api/client';
import { fail, ok, type Result } from './result';

export async function axiosRequest<T = unknown>(
  config: AxiosRequestConfig,
): Promise<Result<T, AxiosError>> {
  try {
    const response = await pcIdealApiClient.request<T>(config);
    return ok(response.data);
  } catch (error) {
    return fail(error as AxiosError);
  }
}
