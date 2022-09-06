import { forwardRef } from 'react';
import styled from 'styled-components';

type Props = Omit<JSX.IntrinsicElements['button'], 'ref'>;

export const ButtonStyled = styled.button`
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sharedValue.borderRadius};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  &:hover {
    cursor: pointer;
  }
`;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <ButtonStyled {...props} ref={ref} />;
});

export default Button;
