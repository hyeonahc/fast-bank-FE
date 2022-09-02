import { useState } from 'react';
import styled from 'styled-components';

import PageHeading from '@/components/PageHeading';
import CartListTemplate from '@/components/CartListTemplate';
import PageDescription from '@/components/PageDescription';

export const CartPageContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  fontSize: '1.4rem',
  '> *': {
    marginBottom: '0.8rem',
  },
});

export const CartPageLabel = styled(PageHeading)({});

export const CartPageDescription = styled(PageDescription)({});

const CartPage = () => {
  return (
    <CartPageContainer>
      <CartPageLabel>장바구니</CartPageLabel>
      <CartPageDescription>
        %NAME 님이 장바구니에 넣은 상품입니다.
      </CartPageDescription>
      <CartListTemplate />
    </CartPageContainer>
  );
};

export default CartPage;
