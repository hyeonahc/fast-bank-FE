import React, { useCallback, useEffect, useState } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError, skipToken } from '@reduxjs/toolkit/query';
import Select from '@/components/common/Select';
import SearchInput from './SearchInput';
import * as S from './style';

import useDebounce from '@/hooks/useDebounce';
import { useSearchQuery } from '@/api/searchApi';

import { CATALOG_LIST, KEYWORD_LIST } from '@/constants/searchBar';
import { Product } from '@/types/product';

const defaultInputState = {
  catalog: CATALOG_LIST[0].value,
  keyword: KEYWORD_LIST[0].value,
  word: '',
};

const askIsEmpty = (data: typeof defaultInputState) => {
  return Object.keys(data).every((key) => {
    const k = key as keyof typeof data;
    return data[k] === defaultInputState[k];
  });
};

interface Props {
  className?: string;
  onUpdate: (
    isEmpty: boolean,
    isLoading: boolean,
    isFetching: boolean,
    data: Product[] | undefined,
    error: FetchBaseQueryError | SerializedError | undefined,
  ) => void;
}

export const onUpdateTyped = (fn: Props['onUpdate']) => fn;

const ProductSearchBar = (props: Props) => {
  const { className, onUpdate } = props;

  //region input isEmpty
  const [input, setInput] = useState({ ...defaultInputState });
  const [isEmpty, setIsEmpty] = useState(askIsEmpty(input));
  const onChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      const inputState = {
        ...input,
        [name]: value.trim(),
      };
      setInput(inputState);
      setIsEmpty(askIsEmpty(inputState));
    },
    [input],
  );
  //endregion

  const queryParams = useDebounce(isEmpty ? skipToken : input, 100);
  const { isLoading, isFetching, data, error } = useSearchQuery(queryParams);

  useEffect(() => {
    if (isEmpty) {
      onUpdate(true, false, false, undefined, undefined);
    } else {
      const querying = isLoading || isFetching || !!data || !!error;

      // 폼은 채워져 있는데 debounce 로 인해 query 가 밀린 상태는 일단 로딩 상태
      if (!querying) onUpdate(false, false, !!data, undefined, undefined);
      else onUpdate(false, isLoading, isFetching, data, error);
    }
  }, [isEmpty, isLoading, isFetching, data, error]);

  return (
    <S.Container className={className}>
      <S.FilterContainer>
        <Select name="catalog" onChange={onChangeSelect} value={input.catalog}>
          {CATALOG_LIST.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        <Select name="keyword" onChange={onChangeSelect} value={input.keyword}>
          {KEYWORD_LIST.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </S.FilterContainer>
      <SearchInput name="word" onChange={onChangeSelect} />
    </S.Container>
  );
};

export default ProductSearchBar;
