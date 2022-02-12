import {useRef, useEffect, type MutableRefObject} from 'react';

export function useSizeChecker<T>(
  value: T,
): MutableRefObject<T | undefined>['current'] {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
