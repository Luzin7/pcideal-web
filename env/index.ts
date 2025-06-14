import { z } from 'zod';

const envSchema = z.object({
  NOMINA_API_URL_BASE_PROD: z.string().url().optional(),
  NOMINA_API_URL_BASE_DEV: z.string().url().default('http://localhost:7777'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
  JWT_MEMBER_ACCESS_EXPIRES_IN: z.coerce.number().default(30),
  JWT_MEMBER_REFRESH_EXPIRES_IN: z.coerce.number().default(7),
});

type EnvSchema = z.infer<typeof envSchema>;
const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.flatten());
  throw new Error('Invalid environment variables');
}

const env: EnvSchema = _env.data;
export { env };
