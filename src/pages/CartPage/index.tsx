import styled, { css } from 'styled-components';

import PageHeading from '@/components/PageHeading';
import PageDescription from '@/components/PageDescription';
import CartListTemplate from '@/components/CartListTemplate';

interface Props {
  className?: string;
}

export const CartPageContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: ${theme.fontSize.regular};
    > * {
      margin-bottom: ${theme.space.marginColumn};
    }
  `}
`;

export const CartPageLabel = styled(PageHeading)({});

const CartPage = (props: Props) => {
  const { className } = props;
  return (
    <CartPageContainer className={className}>
      <CartPageLabel>장바구니</CartPageLabel>
      <CartListTemplate />
    </CartPageContainer>
  );
};

export default CartPage;
