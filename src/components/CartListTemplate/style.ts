import styled, { css } from 'styled-components';
import CartList from '@/components/CartListTemplate/CartList';

export const CartListStyled = styled(CartList)`
  padding-bottom: 0;
`;

export const CheckboxLabel = styled.label({
  flexGrow: 0,
});

export const Checkbox = styled.input.attrs({ type: 'checkbox' })({});

export const BottomButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-flow: nowrap;
    gap: ${theme.space.marginRow};

    > * {
      flex-grow: 1;
      flex-shrink: 0;
    }
  `}
`;
