import * as S from './style';
import { forwardRef } from 'react';

// text 타입만으로 막으려고 했는데 너무 많아서 일단 보류(HTMLInputTypeAttribute)
type Props = {} & Omit<JSX.IntrinsicElements['input'], 'ref'>;

// placeholder 는 원래 지원
const InputText = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <S.Input {...props} ref={ref} />;
});

export default InputText;
