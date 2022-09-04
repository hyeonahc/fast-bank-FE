import * as S from './style';

interface Props {
  checked: boolean;
  disabledCheckbox: boolean;
  onChangeCheckboxAll: (checked: boolean) => void;
}

const CartListHeader = (props: Props) => {
  const { checked, disabledCheckbox, onChangeCheckboxAll } = props;

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
    </S.CartListHeaderContainer>
  );
};

export default CartListHeader;
