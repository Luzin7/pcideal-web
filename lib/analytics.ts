import { track } from '@vercel/analytics';

type AnalyticsEvent =
  | { name: 'builder_started' }
  | { name: 'build_requested'; properties: { budget: number } }
  | { name: 'build_generated'; properties: { budget: number } }
  | {
      name: 'affiliate_clicked';
      properties: { build_type: string; part: string };
    };

export const trackEvent = (event: AnalyticsEvent) => {
  if ('properties' in event) {
    track(event.name, event.properties);
    return;
  }

  track(event.name);
};
