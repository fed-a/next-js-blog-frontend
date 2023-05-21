import { useEffect, useState } from 'react';

export function useSsrMemo<T>(clientValueFn: () => T, defaultValue: T, deps: any[] = []) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(clientValueFn());
  }, deps);

  return value;
}
