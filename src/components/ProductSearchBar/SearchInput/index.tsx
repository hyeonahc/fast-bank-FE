import React, { forwardRef, useCallback } from 'react';
import * as S from './style';

type Props = {} & Omit<JSX.IntrinsicElements['input'], 'ref'>;

const SearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { onInput, onChange } = props;

  const onChangeWrapped = useCallback(
    (on?: React.ChangeEventHandler<HTMLInputElement>) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        on?.(e);
      },
    [],
  );

  return (
    <S.SearchInput
      ref={ref}
      {...props}
      placeholder="검색어를 입력해주세요"
      onInput={onChangeWrapped(onInput)}
      onChange={onChangeWrapped(onChange)}
    />
  );
});

export default SearchInput;
