import * as S from './style';
import { forwardRef } from 'react';

type Props = Omit<JSX.IntrinsicElements['button'], 'ref'>;

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <S.Button {...props} ref={ref} />;
});

export default Button;
