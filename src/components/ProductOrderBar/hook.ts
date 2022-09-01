import { useCallback, useEffect, useState } from 'react';
import { ORDER_TYPE, OrderType } from '@/constants/orderBar';
import { Product } from '@/types/product';

export const useProductOrderBar = (data: Product[] | undefined) => {
  const [orderedData, setOrderedData] = useState<Product[]>([]);

  const [order, setOrder] = useState<OrderType>(ORDER_TYPE.NONE);
  const onChangeOrder = useCallback((order: OrderType) => {
    setOrder(order);
  }, []);

  useEffect(() => {
    if (!data) {
      setOrderedData([]);
      return;
    }

    switch (order) {
      case ORDER_TYPE.NONE:
        setOrderedData(data);
        return;
      case ORDER_TYPE.NAME:
        setOrderedData([...data].sort((a, b) => a.name.localeCompare(b.name)));
        return;
      case ORDER_TYPE.CATALOG:
        setOrderedData([...data].sort((a, b) => a.type.localeCompare(b.type)));
        return;
    }
  }, [order, data]);

  return { orderedData, onChangeOrder };
};
