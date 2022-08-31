import CartListHeader from './CartListHeader';
import CartList from './CartList';

import { useCheckboxWithCheckAll } from './hook';
import useGoSignUpHasAuthError from '@/hooks/useGoSignUpHasAuthError';

import { useGetCartProductsQuery, useRemoveCartMutation } from '@/api/cartApi';

interface Props {}

const CartTemplate = (props: Props) => {
  const {
    isLoading: isLoadingGet,
    isFetching: isFetchingGet,
    data,
    error: errorGet,
  } = useGetCartProductsQuery(undefined);
  const [removeCart, { isLoading: isLoadingRemove, error: errorRemove }] =
    useRemoveCartMutation();

  useGoSignUpHasAuthError([errorGet, errorRemove]);

  const {
    checkedList,
    hasInCheckedList,
    checkedAll,
    onChangeCheckbox,
    onChangeCheckboxAll,
    isHasCheckList,
  } = useCheckboxWithCheckAll(data);

  const isFetching = isFetchingGet || isLoadingRemove;
  const disabledCommand = !isHasCheckList || isFetching;

  if (errorGet || errorRemove) return <div>에러!</div>;
  if (isLoadingGet) return <div>로딩 중</div>;

  return (
    <>
      <CartListHeader
        checked={checkedAll}
        disabledCheckbox={isFetching}
        onChangeCheckboxAll={onChangeCheckboxAll}
        onClickRemove={() => removeCart({ ids: checkedList })}
        disabledRemove={disabledCommand}
      />
      <CartList
        data={data}
        onChangeSelect={onChangeCheckbox}
        hasInCheckedList={hasInCheckedList}
        disabledCard={isFetching}
      />
    </>
  );
};
export default CartTemplate;
