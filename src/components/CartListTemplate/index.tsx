import CartListHeader from './CartListHeader';
import CartList from './CartList';
import * as S from './style';

import { useCheckboxWithCheckAll } from './hook';
import useGoSignUpHasAuthError from '@/hooks/useGoSignUpHasAuthError';

import { useGetCartProductsQuery, useRemoveCartMutation } from '@/api/cartApi';
import Button from '@/components/common/Button';
import ButtonFilled from '@/components/common/Button/ButtonFilled';

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

  const isFetching = isFetchingGet || isLoadingRemove;
  const disabledCommand = !isHasCheckList || isFetching;

  if (errorGet || errorRemove) return <div>에러!</div>;

  return (
    <>
      <CartListHeader
        checked={checkedAll}
        disabledCheckbox={isFetching}
        onChangeCheckboxAll={onChangeCheckboxAll}
      />
      <CartList
        data={data}
        onChangeSelect={onChangeCheckbox}
        checkedList={checkedList}
        disabledCard={isFetching}
      />
      <S.BottomButtonContainer>
        <ButtonFilled disabled={disabledCommand}>신청하기</ButtonFilled>
        <Button disabled={disabledCommand}>삭제하기</Button>
      </S.BottomButtonContainer>
    </>
  );
};
export default CartListTemplate;
