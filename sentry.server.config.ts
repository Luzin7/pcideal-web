import { sentryOptions } from '@/lib/sentry-options';
import * as Sentry from '@sentry/nextjs';

Sentry.init(sentryOptions);
