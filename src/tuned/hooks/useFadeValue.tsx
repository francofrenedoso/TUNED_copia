import { useEffect, useRef, useState } from 'react';

/**
 * Hook para animar el cambio de valor con fade in/out.
 * @param value El valor a mostrar y animar
 * @param duration Duración de la animación en ms (default: 150)
 * @returns { displayedValue, fade, loading }
 */
export function useFadeValue<T>(value: T, duration: number = 150) {
  const [fade, setFade] = useState(true);
  const [displayedValue, setDisplayedValue] = useState<T>(value);
  const prevValue = useRef<T>(value);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (value !== prevValue.current) {
      setFade(false); // fade out
      setLoading(true);
      const timeout = setTimeout(() => {
        setDisplayedValue(value); // update value
        setFade(true); // fade in
        setLoading(false);
        prevValue.current = value;
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [value, duration]);

  return { displayedValue, fade, loading };
}
