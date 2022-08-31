import { ChangeEvent, useCallback } from 'react';
import * as S from './style';

import { Product } from '@/types/product';

interface Props {
  data: Product[] | undefined;
  onChangeSelect: (id: string, checked: boolean) => void;
  hasInCheckedList: (id: string) => boolean;
  disabledCard: boolean;
}

const CartList = (props: Props) => {
  const { data, onChangeSelect, hasInCheckedList, disabledCard } = props;
  const onChangeCheckbox = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChangeSelect(e.target.value, e.target.checked);
    },
    [onChangeSelect],
  );

  if (!data) return null;
  return (
    <S.CartList>
      {data.map((product) => (
        <div key={product.id}>
          <input
            type="checkbox"
            value={product.id}
            onChange={onChangeCheckbox}
            checked={hasInCheckedList(product.id)}
            disabled={disabledCard}
          />
          <p>{product.name}</p>
        </div>
      ))}
    </S.CartList>
  );
};

export default CartList;
