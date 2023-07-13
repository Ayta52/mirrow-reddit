export function assoc<O extends object, K extends string, T>(
  key: K,
  value: T,
  obj: O
) {
  return {
    ...obj,
    [key]: value,
  } as K extends keyof O ? Omit<O, K> & Record<K, T> : O & Record<K, T>;
}
