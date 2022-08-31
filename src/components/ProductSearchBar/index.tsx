import React, { useCallback, useEffect, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';

import * as S from './style';
import Select from '@/components/common/Select';
import SearchInput from './SearchInput';

import useDebounce from '@/hooks/useDebounce';
import { useSearchQuery } from '@/api/searchApi';

import { convertRTKQueryErrorToError } from '@/utils/convertRTKQueryErrorToError';
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
  onUpdate: (
    isEmpty: boolean,
    isLoading: boolean,
    data: Product[] | undefined,
    error: Error | undefined,
  ) => void;
}

export const onUpdateTyped = (fn: Props['onUpdate']) => fn;

const ProductSearchBar = (props: Props) => {
  const { onUpdate } = props;

  //region input isEmpty
  const [input, setInput] = useState({ ...defaultInputState });
  const [isEmpty, setIsEmpty] = useState(askIsEmpty(input));
  const onChangeSelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      const inputState = {
        ...input,
        [name]: value,
      };
      setInput(inputState);
      setIsEmpty(askIsEmpty(inputState));
    },
    [input],
  );
  //endregion

  const queryParams = useDebounce(isEmpty ? skipToken : input, 100);
  const { isLoading, data, error } = useSearchQuery(queryParams);

  useEffect(() => {
    if (isEmpty) {
      onUpdate(true, false, undefined, undefined);
    } else {
      const querying = isLoading || !!data || !!error;

      // 폼은 채워져 있는데 debounce 로 인해 query 가 밀린 상태는 일단 로딩 상태
      if (!querying) onUpdate(false, true, undefined, undefined);
      else onUpdate(false, isLoading, data, convertRTKQueryErrorToError(error));
    }
  }, [isEmpty, isLoading, data, error]);

  return (
    <S.Container>
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
