/*

CustomHook generico para probar conexiones a una API falsa
simulando respuestas con un retraso y error en la carga. 

No se garantiza su funcionamiento en producción

*/


import { useEffect, useState } from 'react';

export function useConnection<T>(url: string, intervalMs: number = 3000) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        // simulacion de retraso en la respuesta
        await new Promise(resolve => setTimeout(resolve, 3000));
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al obtener los datos');
        const result = await response.json();
        if (active) setData(result);
      } catch (err: any) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, intervalMs);
    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [url, intervalMs]);

  return { data, loading, error };
}
