import { useState } from 'react';

import CartTemplate from '@/components/CartListTemplate';
import { CartPageContainer } from '@/pages/CartPage/style';

const CartPage = () => {
  // FIXME 임시!!!!!!
  const [user] = useState({
    name: 'TEST',
  });

  return (
    <CartPageContainer>
      <h2>장바구니</h2>
      <div>{user.name}님이 장바구니에 넣은 상품입니다.</div>
      <CartTemplate />
    </CartPageContainer>
  );
};

export default CartPage;
