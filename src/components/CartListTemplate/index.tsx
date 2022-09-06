import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@material-ui/icons';

import Button from '@/components/common/Button';
import ButtonFilled from '@/components/common/Button/ButtonFilled';
import LoadingCardSize from '@/components/common/Loading/LoadingCardSize';
import ListEmpty from '@/components/ListEmpty';
import CheckoutModal from '@/components/CheckoutModal';
import * as S from './style';

import { useCheckboxWithCheckAll } from './hook';
import useGoSignUpHasAuthError from '@/hooks/useGoSignUpHasAuthError';

import { useGetCartProductsQuery, useRemoveCartMutation } from '@/api/cartApi';
import { pagesFullPath } from '@/pages/pagesPath';
import styled from 'styled-components';
import PageDescription from '@/components/PageDescription';

const CartPageDescription = styled(PageDescription)({});

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
      setDisplayCheckoutModal(true);
    },
    [removeCart, checkedList],
  );
  const onClickRemove = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      removeCart({ ids: checkedList });
    },
    [removeCart, checkedList],
  );

  const navigator = useNavigate();
  const [displayCheckoutModal, setDisplayCheckoutModal] = useState(false);
  const onClickCheckoutConfirm = useCallback(() => {
    navigator(pagesFullPath.home);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isFetching = isFetchingGet || isLoadingRemove;
  const disabledCommand = !isHasCheckList || isFetching;

  if (errorGet || errorRemove) return <div>에러!</div>;

  return (
    <>
      {isFetchingGet ? (
        <LoadingCardSize />
      ) : !data || data.length === 0 ? (
        <ListEmpty
          Icon={ShoppingCartOutlined}
          text="장바구니에 담긴 상품이 없습니다"
        />
      ) : (
        <>
          <CartPageDescription>
            %NAME님이 장바구니에 넣은 상품입니다.
          </CartPageDescription>
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
          <CheckoutModal
            isLoading={isLoadingRemove}
            title="선택하신 상품이 신청되었습니다"
            buttonText="홈으로"
            displayModal={displayCheckoutModal}
            setDisplayModal={setDisplayCheckoutModal}
            onClickConfirm={onClickCheckoutConfirm}
          />
        </>
      )}
    </>
  );
};
export default CartListTemplate;
