import styled, { css } from 'styled-components';
import Button from '@/components/common/Button';

const ButtonFilled = styled(Button)`
  ${({ theme }) => css`
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.textSecond};
  `}
`;

export default ButtonFilled;
