import { RefObject, useCallback, useEffect, useRef } from "react";

export const useClickOutside = <T extends HTMLElement>(callback: Function) => {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    },
    [ref, callback]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return ref as RefObject<T>;
};
