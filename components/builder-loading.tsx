import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function BuilderLoadingSkeleton() {
  return (
    <Card className="shadow-sm">
      <CardContent className="flex flex-col items-center justify-center py-12">
        <div className="relative mb-6">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
          <div className="absolute inset-0 rounded-full h-16 w-16 border-t-2 border-primary/20"></div>
        </div>
        <h3 className="text-xl font-medium mb-2">Montando seu PC ideal...</h3>
        <p className="text-muted-foreground text-center max-w-md">
          Estamos analisando milhares de combinações para encontrar a melhor
          configuração para você.
        </p>
        <div className="w-full max-w-md mt-6 mt-auto space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Verificando compatibilidade...
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-2 w-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: '0.3s' }}
            />
            <span className="text-sm text-muted-foreground">
              Otimizando custo-benefício...
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="h-2 w-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: '0.6s' }}
            />
            <span className="text-sm text-muted-foreground">
              Buscando melhores preços...
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function BuildCardsLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="shadow-sm">
          <CardHeader>
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-40 mt-2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-28 mb-4" />
            <div className="space-y-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="flex items-center gap-2">
                  <Skeleton className="h-6 w-6 rounded" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
              <Skeleton className="h-4 w-32" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
