import { ChangeEvent, MouseEvent, useCallback } from 'react';

import Button from '@/components/common/Button';
import ButtonFilled from '@/components/common/Button/ButtonFilled';
import LoadingCardSize from '@/components/common/Loading/LoadingCardSize';
import EmptyListCardSize from '@/components/common/EmptyListCardSize';
import * as S from './style';

import { useCheckboxWithCheckAll } from './hook';
import useGoSignUpHasAuthError from '@/hooks/useGoSignUpHasAuthError';

import { useGetCartProductsQuery, useRemoveCartMutation } from '@/api/cartApi';

interface Props {}

const CartListTemplate = (props: Props) => {
  const {
    isFetching: isFetchingGet,
    data,
    error: errorGet,
  } = useGetCartProductsQuery(undefined);
  const [removeCart, { isLoading: isLoadingRemove, error: errorRemove }] =
    useRemoveCartMutation();

  useGoSignUpHasAuthError([errorGet, errorRemove]);

  const {
    checkedList,
    checkedAll,
    onChangeCheckbox,
    onChangeCheckboxAll,
    isHasCheckList,
  } = useCheckboxWithCheckAll(data);

  const onChangeCheckboxAllWrapped = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => onChangeCheckboxAll(e.target.checked),
    [onChangeCheckboxAll],
  );

  const onClickCheckout = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      removeCart({ ids: checkedList });
    },
    [removeCart, checkedList],
  );
  const onClickRemove = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      removeCart({ ids: checkedList });
    },
    [removeCart, checkedList],
  );

  const isFetching = isFetchingGet || isLoadingRemove;
  const disabledCommand = !isHasCheckList || isFetching;

  if (errorGet || errorRemove) return <div>에러!</div>;

  return (
    <>
      {isFetchingGet ? (
        <LoadingCardSize />
      ) : !data || data.length === 0 ? (
        <EmptyListCardSize>장바구니에 추가해주세요!</EmptyListCardSize>
      ) : (
        <>
          <S.CheckBoxContainer>
            <S.Checkbox
              onChange={onChangeCheckboxAllWrapped}
              checked={checkedAll}
              disabled={isFetching}
            />
            <S.CheckboxLabel>전체선택</S.CheckboxLabel>
          </S.CheckBoxContainer>
          <S.CartListStyled
            data={data}
            onChangeSelect={onChangeCheckbox}
            checkedList={checkedList}
            disabledCard={isFetching}
          />
          <S.BottomButtonContainer>
            <ButtonFilled onClick={onClickCheckout} disabled={disabledCommand}>
              신청하기
            </ButtonFilled>
            <Button onClick={onClickRemove} disabled={disabledCommand}>
              삭제하기
            </Button>
          </S.BottomButtonContainer>
        </>
      )}
    </>
  );
};
export default CartListTemplate;
