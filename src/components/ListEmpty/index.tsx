import { useCallback, MouseEvent, ComponentType } from 'react';

import theme from '@/styles/theme';
import styled, { css } from 'styled-components';
import ButtonFilled from '@/components/common/Button/ButtonFilled';
import { useNavigate } from 'react-router-dom';
import { pagesFullPath } from '@/pages/pagesPath';
import { SvgIconProps } from '@material-ui/core';

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

const SVGIconStyle = {
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

interface Props {
  Icon: ComponentType<SvgIconProps>;
  text: string;
}

const ListEmpty = (props: Props) => {
  const { Icon, text } = props;

  const navigate = useNavigate();

  const onClickHome = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      navigate(pagesFullPath.home);
    },
    [navigate],
  );

  return (
    <Container>
      <>
        <Icon style={SVGIconStyle} />
        <TextContainer>{text} 😥</TextContainer>
        <ButtonFilled onClick={onClickHome}>흠으로</ButtonFilled>
      </>
    </Container>
  );
};

export default ListEmpty;
