import React, { useCallback, MouseEvent } from 'react';
import { ShoppingCartOutlined } from '@material-ui/icons';

import theme from '@/styles/theme';
import styled, { css } from 'styled-components';
import ButtonFilled from '@/components/common/Button/ButtonFilled';
import { useNavigate } from 'react-router-dom';
import { pagesFullPath } from '@/pages/pagesPath';

const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: calc(100% - 1.6rem);
    top: 50%;
    left: calc(50% + 0.8rem);
    transform: translate(calc(-50% - 0.8rem), -50%);

    ${theme.common.flexCenterColumn}
    gap: ${theme.space.marginColumn};
  `}
`;

const ShoppingCartOutlinedStyle = {
  color: theme.colors.primary,
  fontSize: '14.4rem',
};

const TextContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.fontSize.extraBig};
    text-align: center;
  `}
`;

interface Props {}

const CartListEmpty = (props: Props) => {
  const navigate = useNavigate();

  const onClickHome = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      navigate(pagesFullPath.home);
    },
    [navigate],
  );

  return (
    <Container>
      <ShoppingCartOutlined style={ShoppingCartOutlinedStyle} />
      <TextContainer>장바구니에 담긴 상품이 없습니다 😥</TextContainer>
      <ButtonFilled onClick={onClickHome}>흠으로</ButtonFilled>
    </Container>
  );
};

export default CartListEmpty;
