import { forwardRef } from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckSVG } from '@/assets/icons/check_FILL0_wght700_GRAD0_opsz24.svg';

const CheckSVGStyled = styled(CheckSVG).attrs(({ theme }) => ({
  fill: theme.colors.primary,
}))({
  visibility: 'hidden',
  textAlign: 'center',
  marginRight: '0.6rem',
});

const InputRadioStyled = styled.input.attrs({
  type: 'radio',
})(({ theme }) => ({
  appearance: 'none',
  position: 'relative',
  padding: 0,
  margin: 0,
  fontSize: 'inherit',
  '&:not(:checked)': {
    '&::before': {
      content: `"·"`,
      position: 'absolute',
      display: 'block',
      width: '1em',
      height: '1em',
      bottom: '-0.15em',
      fontWeight: 700,
      textAlign: 'center',
    },
  },
  [`&:checked + ${CheckSVGStyled}`]: {
    visibility: 'visible',
  },
}));

type Props = {} & Omit<JSX.IntrinsicElements['input'], 'ref' | 'type'>;

// placeholder 는 원래 지원
const InputRadio = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <InputRadioStyled {...props} ref={ref} />
      <CheckSVGStyled width="1em" height="1em" />
    </>
  );
});

export default InputRadio;
