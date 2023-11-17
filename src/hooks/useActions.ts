import { debounce } from "@/lib/utils";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const useAction = <T extends (...args: any[]) => Promise<{ success: boolean; data?: any; error?: any }>>(
  action: T,
  options?: { debounce?: boolean; delay?: number; init?: Awaited<ReturnType<T>>["data"] }
) => {
  // Get the type of the return value of the action without the promise

  const [data, setData] = useState<Awaited<Promise<ReturnType<T>>>["data"]>(options?.init);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState(false);

  const fetchData = useCallback(async (...args: Parameters<T>) => {
    setLoading(true);

    const { success, data, error } = await action(...args);

    if (success) {
      setData(data);
      setSuccess(true);
      setError(null);
    } else {
      setError(error);
    }
    setLoading(false);
  }, []);

  const debounceFetchData = useCallback(debounce(fetchData, options?.delay || 300), []);

  const _action = useCallback(
    (...args: Parameters<T>) => {
      options?.debounce ? debounceFetchData(...args) : fetchData(...args);
    },
    [options]
  );

  return useMemo(() => ({ action: _action, data, loading, error, success, setData }), [_action, data, loading, error, success, setData]);
};
