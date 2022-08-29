import React, { forwardRef, useCallback } from 'react';
import * as S from './style';

type Props = {} & Omit<JSX.IntrinsicElements['input'], 'ref'>;

const SearchInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { onInput, onChange } = props;

  const search = useCallback((keyword: string) => {}, []);

  const onChangeWrapped = useCallback(
    (on?: React.ChangeEventHandler<HTMLInputElement>) =>
      (e: React.ChangeEvent<HTMLInputElement>) => {
        on?.(e);
        const keyword = e.currentTarget.value.trim();
        if (keyword) search(keyword);
      },
    [search],
  );

  return (
    <S.SearchInput
      ref={ref}
      {...props}
      onInput={onChangeWrapped(onInput)}
      onChange={onChangeWrapped(onChange)}
    />
  );
});

export default SearchInput;
