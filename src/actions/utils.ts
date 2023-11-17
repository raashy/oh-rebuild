/**
 * A utility function to wrap a function in a try/catch block and return a formatted response
 * @param fn A function to wrap in a try/catch block
 * @returns A formatted response
 */
export const formatRes = <T extends (...args: any[]) => any>(fn: T) => {
  return async function (...args: Parameters<T>) {
    try {
      return { success: true, data: (await fn(...args)) as Awaited<ReturnType<T>> };
    } catch (error: any) {
      return { success: false, error: error.message || "Something went wrong" };
    }
  };
};
