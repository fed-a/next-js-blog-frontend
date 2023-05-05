/* eslint-disable no-unused-vars */
export function debounce<Args>(
  fn: (...args: Args[]) => void,
  delay: number,
): (...args: Args[]) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Args[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
