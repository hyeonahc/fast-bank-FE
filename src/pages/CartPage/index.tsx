import { useState } from 'react';
import styled from 'styled-components';

import PageHeading from '@/components/PageHeading';
import CartListTemplate from '@/components/CartListTemplate';

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

export const CartPageDescription = styled.div({});

const CartPage = () => {
  // FIXME 임시!!!!!!
  const [user] = useState({
    name: 'TEST',
  });

  return (
    <CartPageContainer>
      <CartPageLabel>장바구니</CartPageLabel>
      <CartPageDescription>
        {user.name}님이 장바구니에 넣은 상품입니다.
      </CartPageDescription>
      <CartListTemplate />
    </CartPageContainer>
  );
};

export default CartPage;
