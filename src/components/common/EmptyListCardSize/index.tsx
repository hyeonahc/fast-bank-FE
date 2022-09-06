import styled, { css } from 'styled-components';
import EmptySVG from '@/assets/icons/file-empty-svgrepo-com.svg';

const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    ${theme.common.flexCenterColumn};
    gap: 2rem;
    height: 18rem;
  `}
`;

const EmptySVGStyled = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 9rem;
    background-color: ${theme.colors.cardPink};
    mask: url(${EmptySVG}) no-repeat center;
    mask-size: contain;
  `}
`;

const TextStyled = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-size: ${theme.fontSize.big};
    font-weight: ${theme.fontWeight.regular};
  `}
`;

interface Props {
  className?: string;
  children?: string;
}

const EmptyListCardSize = (props: Props) => {
  const { children, ...propsRest } = props;
  return (
    <Container {...propsRest}>
      <EmptySVGStyled />
      <TextStyled>{children ?? ''}</TextStyled>
    </Container>
  );
};

export default EmptyListCardSize;
