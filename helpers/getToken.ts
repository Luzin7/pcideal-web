'use server';

import {
  accessTokenCookieKey,
  refreshTokenCookieKey,
} from '@/constants/variables';
import { cookies } from 'next/headers';

export async function isServer() {
  return typeof window === 'undefined';
}

export async function getAccessToken(): Promise<string | null> {
  if (await isServer()) {
    return (await cookies()).get(accessTokenCookieKey)?.value || null;
  }

  const match = document.cookie.match(
    new RegExp(`${accessTokenCookieKey}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

export async function getRefreshToken(): Promise<string | null> {
  if (await isServer()) {
    return (await cookies()).get(refreshTokenCookieKey)?.value || null;
  }

  const match = document.cookie.match(
    new RegExp(`${refreshTokenCookieKey}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : null;
}
