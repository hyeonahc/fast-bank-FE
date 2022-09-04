import styled, { css } from 'styled-components';
import Button from '@/components/common/Button';

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
