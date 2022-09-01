import { forwardRef } from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckSVG } from '@/assets/icons/check_FILL0_wght700_GRAD0_opsz24.svg';

const CheckSVGStyled = styled(CheckSVG).attrs(({ theme }) => ({
  fill: theme.colors.primary,
}))({
  visibility: 'hidden',
  marginRight: '0.2rem',
  textAlign: 'center',
});

const InputRadio = styled.input.attrs({
  type: 'radio',
})({
  appearance: 'none',
  padding: 0,
  margin: 0,
  width: 0,
  height: 0,
  '&:not(:checked)::before': {
    content: `"·"`,
    display: 'inline-block',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    fontWeight: 700,
    textAlign: 'center',
  },
  [`&:checked + ${CheckSVGStyled}`]: {
    visibility: 'visible',
  },
});

// text 타입만으로 막으려고 했는데 너무 많아서 일단 보류(HTMLInputTypeAttribute)
type Props = {} & Omit<JSX.IntrinsicElements['input'], 'ref' | 'type'>;

// placeholder 는 원래 지원
const InputText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <>
      <InputRadio {...props} ref={ref} />
      <CheckSVGStyled width="1em" height="1em" />
    </>
  );
});

export default InputText;
