import styled, { css } from 'styled-components';

import PageHeading from '@/components/PageHeading';
import CartListTemplate from '@/components/CartListTemplate';
import PageDescription from '@/components/PageDescription';

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

export const CartPageDescription = styled(PageDescription)({});

const CartPage = (props: Props) => {
  const { className } = props;
  return (
    <CartPageContainer className={className}>
      <CartPageLabel>장바구니</CartPageLabel>
      <CartPageDescription>
        %NAME님이 장바구니에 넣은 상품입니다.
      </CartPageDescription>
      <CartListTemplate />
    </CartPageContainer>
  );
};

export default CartPage;
