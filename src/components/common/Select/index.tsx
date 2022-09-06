import { forwardRef } from 'react';
import * as S from './style';

type Props = {
  selectedDefault: boolean;
} & Omit<JSX.IntrinsicElements['select'], 'ref'>;

export type SelectRefType = HTMLSelectElement;

const Select = forwardRef<SelectRefType, Props>((props, ref) => {
  return <S.Select {...props} ref={ref} />;
});

export default Select;
