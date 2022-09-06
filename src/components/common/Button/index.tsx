import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = Omit<JSX.IntrinsicElements['button'], 'ref'>;

export const ButtonStyled = styled.button`
  padding: 1em 2em;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <ButtonStyled {...props} ref={ref} />;
});

export default Button;
