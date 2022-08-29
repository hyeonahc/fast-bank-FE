export function mapObject<T extends Record<string, any>>(
  obj: T,
  fn: (key: keyof T, value: any) => unknown,
) {
  return Object.keys(obj).reduce(
    (newObj, key) => {
      newObj[key as keyof T] = fn(key, obj[key]);
      return newObj;
    },
    {} as {
      [key in keyof T]: any;
    },
  );
}
