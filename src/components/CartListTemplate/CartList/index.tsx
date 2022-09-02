import { ChangeEvent, useCallback, useMemo } from 'react';
import * as S from './style';

import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCardList';

interface Props {
  data: Product[] | undefined;
  onChangeSelect: (id: string, checked: boolean) => void;
  checkedList: string[];
  disabledCard: boolean;
}

const CartList = (props: Props) => {
  const { data, onChangeSelect, checkedList, disabledCard } = props;
  const onChangeCheckbox = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChangeSelect(e.target.value, e.target.checked);
    },
    [onChangeSelect],
  );

  const checkList = useMemo(
    () => (data ? data.map((product) => checkedList.includes(product.id)) : []),
    [checkedList, data],
  );

  if (!data) return null;
  return (
    <ProductCard
      dataList={data}
      checkedList={checkList}
      onChangeCheck={onChangeCheckbox}
    />

    // <S.CartList>
    //   {data.map((product) => (
    //     <div key={product.id}>
    //       <input
    //         type="checkbox"
    //         value={product.id}
    //         onChange={onChangeCheckbox}
    //         checked={hasInCheckedList(product.id)}
    //         disabled={disabledCard}
    //       />
    //       <p>{product.name}</p>
    //     </div>
    //   ))}
    // </S.CartList>
  );
};

export default CartList;
