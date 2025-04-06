import { useCallback, useEffect, useRef } from 'react';
import { SCROLL_EVENTS } from '../../constants/generic';

const useScrollTo = () => {
  const elementRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      if (elementRef.current) {
        if (e.type === elementRef.current.id) {
          elementRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    SCROLL_EVENTS.forEach((event) => {
      window.addEventListener(event, handleScroll);
    });

    return () => {
      SCROLL_EVENTS.forEach((event) => {
        window.removeEventListener(event, handleScroll);
      });
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { scrollRef: elementRef, scrollToTop };
};

export default useScrollTo;
