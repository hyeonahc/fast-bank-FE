import { useCallback, useState, ChangeEvent } from 'react';
import * as S from './style';

import { ORDER_LIST, ORDER_TYPE, OrderType } from '@/constants/orderBar';

interface Props {
  className?: string;
  onChange?: (order: OrderType) => void;
}

export const onChangeOrderBarTyped = (fn: (order: OrderType) => void) => fn;

const ProductOrderBar = (props: Props) => {
  const { className, onChange } = props;

  const [order, setOrder] = useState<OrderType>(ORDER_TYPE.NONE);
  const onChangeRadio = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newOrder = e.target.value as OrderType;
      setOrder(newOrder);
      onChange?.(newOrder);
    },
    [onChange],
  );

  return (
    <S.Container className={className}>
      {ORDER_LIST.map(({ value, label }) => (
        <S.LabelContainer key={value}>
          <S.InputRadioStyled
            id={`order-bar-${value}`}
            value={value}
            onChange={onChangeRadio}
            checked={value === order}
          />
          <S.Label htmlFor={`order-bar-${value}`}>{label}</S.Label>
        </S.LabelContainer>
      ))}
    </S.Container>
  );
};

export default ProductOrderBar;
