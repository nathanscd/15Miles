import { useEffect, useState, RefObject } from 'react';

export const useScrollProgress = (ref: RefObject<HTMLElement>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on element's position relative to viewport
      // 0 = just entered bottom, 1 = fully scrolled past top
      const start = viewportHeight;
      const end = -rect.height;
      const current = rect.top;
      
      const p = (start - current) / (start - end);
      setProgress(Math.max(0, Math.min(1, p)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
};
