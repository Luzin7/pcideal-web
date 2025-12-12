'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="container flex items-center justify-center min-h-[60vh] py-8">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-destructive" />
            <CardTitle>Algo deu errado</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Desculpe, encontramos um erro inesperado. Nossa equipe foi
            notificada e estamos trabalhando para resolver o problema.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <div className="p-4 bg-muted rounded-md">
              <p className="text-sm font-mono text-destructive">
                {error.message}
              </p>
            </div>
          )}
          <div className="flex gap-2">
            <Button onClick={reset} className="flex-1">
              Tentar novamente
            </Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = '/')}
            >
              Voltar ao início
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
