// Hook personalizado para cache de API com React Query alternativo simples
import { useEffect, useState } from 'react';

type CacheEntry<T> = {
  data: T;
  timestamp: number;
};

const cache = new Map<string, CacheEntry<unknown>>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

export function useApiCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  enabled = true,
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const fetchData = async () => {
      // Verificar cache
      const cached = cache.get(key) as CacheEntry<T> | undefined;
      const now = Date.now();

      if (cached && now - cached.timestamp < CACHE_DURATION) {
        setData(cached.data);
        return;
      }

      // Buscar dados
      setLoading(true);
      try {
        const result = await fetcher();
        cache.set(key, { data: result, timestamp: now });
        setData(result);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error('Erro ao buscar dados'),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key, enabled]);

  const mutate = (newData: T) => {
    cache.set(key, { data: newData, timestamp: Date.now() });
    setData(newData);
  };

  const invalidate = () => {
    cache.delete(key);
  };

  return { data, loading, error, mutate, invalidate };
}

// Função para limpar cache expirado
export function clearExpiredCache() {
  const now = Date.now();
  for (const [key, entry] of cache.entries()) {
    if (now - entry.timestamp > CACHE_DURATION) {
      cache.delete(key);
    }
  }
}
