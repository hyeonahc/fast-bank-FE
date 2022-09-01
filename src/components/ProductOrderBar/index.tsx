import { useCallback, useEffect, useState, ChangeEvent } from 'react';
import * as S from './style';

import { ORDER_LIST, ORDER_TYPE, OrderType } from '@/constants/orderBar';
import InputRadio from '@/components/common/Input/InputRadio';

interface Props {
  className?: string;
  onChange?: (order: OrderType) => void;
}

export const onChangeOrderBarTyped = (fn: (order: OrderType) => void) => fn;

const ProductOrderBar = (props: Props) => {
  const { className, onChange } = props;

  const [order, setOrder] = useState<OrderType>(ORDER_TYPE.NONE);
  const onChangeRadio = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newOrder = e.target.value as OrderType;
    setOrder(newOrder);
    onChange?.(newOrder);
  }, []);

  return (
    <S.Container className={className}>
      {ORDER_LIST.map(({ value, label }) => (
        <S.Label key={value}>
          <InputRadio
            name="order"
            value={value}
            onChange={onChangeRadio}
            checked={value === order}
          />
          {label}
        </S.Label>
      ))}
    </S.Container>
  );
};

export default ProductOrderBar;
