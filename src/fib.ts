export default function fibonacci(n: number): number {
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  const result: number = fibonacci(n - 1) + fibonacci(n - 2);
  return result;
}
