export const ORDER_TYPE = {
  NONE: 'NONE',
  NAME: 'NAME',
  CATALOG: 'CATALOG',
} as const;

export type OrderType = typeof ORDER_TYPE[keyof typeof ORDER_TYPE];

export const ORDER_LIST = [
  { value: ORDER_TYPE.NONE, label: '기본' },
  { value: ORDER_TYPE.NAME, label: '이름순' },
  { value: ORDER_TYPE.CATALOG, label: '유형순' },
];
