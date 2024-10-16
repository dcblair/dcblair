import { useEffect, useState } from 'react';

interface UseResizeObserverProps {
  ref: React.RefObject<HTMLElement>;
}

export const useResizeObserver = ({ ref }: UseResizeObserverProps) => {
  const [width, setWidth] = useState(
    ref.current?.getBoundingClientRect().width || 0,
  );
  const [height, setHeight] = useState(
    ref.current?.getBoundingClientRect().height || 0,
  );

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setWidth(width);
      setHeight(height);
    });

    if (ref?.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { width, height };
};
