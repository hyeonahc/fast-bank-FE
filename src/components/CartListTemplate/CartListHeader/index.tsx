import * as S from './style';

interface Props {
  checked: boolean;
  disabledCheckbox: boolean;
  onChangeCheckboxAll: (checked: boolean) => void;
  onClickRemove: () => void;
  disabledRemove: boolean;
}

const CartListHeader = (props: Props) => {
  const {
    checked,
    disabledCheckbox,
    onChangeCheckboxAll,
    onClickRemove,
    disabledRemove,
  } = props;

  return (
    <S.CartListHeaderContainer>
      <S.CheckboxLabel>
        <S.Checkbox
          type="checkbox"
          onChange={(e) => onChangeCheckboxAll(e.target.checked)}
          checked={checked}
          disabled={disabledCheckbox}
        />{' '}
        전체선택
      </S.CheckboxLabel>
      <S.RemoveButton onClick={() => onClickRemove()} disabled={disabledRemove}>
        삭제하기
      </S.RemoveButton>
    </S.CartListHeaderContainer>
  );
};

export default CartListHeader;
