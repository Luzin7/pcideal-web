import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center flex-1">
              <Skeleton className="h-7 w-7 rounded-full" />
              <Skeleton className="ml-2 h-4 w-20 hidden md:block" />
              {i < 3 && <Skeleton className="flex-1 mx-4 h-2" />}
            </div>
          ))}
        </div>
      </div>

      <Card className="shadow-sm">
        <CardContent className="py-12">
          <div className="space-y-6 max-w-2xl mx-auto">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-48" />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
