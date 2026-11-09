'use client';

import { Button } from '@/components/ui/button';
import '@/styles/globals.css';
import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground antialiased">
        <main className="flex min-h-screen items-center justify-center p-6">
          <div className="w-full max-w-md rounded-xl border bg-card p-6 text-center shadow-sm">
            <h1 className="text-2xl font-bold text-primary">Algo deu errado</h1>
            <p className="mt-2 text-muted-foreground">
              Não conseguimos carregar a página. Tente novamente.
            </p>
            <Button onClick={reset} className="mt-6 w-full">
              Tentar novamente
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
