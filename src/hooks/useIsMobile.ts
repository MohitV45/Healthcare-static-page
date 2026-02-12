import { useState, useEffect } from 'react';
import { throttle } from '../utils/performance';

/**
 * Shared hook to detect mobile/touch devices.
 * Uses `pointer: coarse` media query with a throttled resize listener.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(pointer: coarse)').matches
      : false
  );

  useEffect(() => {
    const checkMobile = throttle(() => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    }, 200);

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}
