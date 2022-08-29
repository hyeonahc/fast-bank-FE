import { useCallback, useState } from 'react';
import { Product } from '@/types/product';

export const useProductSearchBar = () => {
  const [searchBarState, setSearch] = useState({
    isEmpty: true,
    isLoading: false,
    data: undefined as undefined | Product[],
    error: undefined as Error | undefined,
  });

  const onUpdateSearchBar = useCallback(
    (
      isEmpty: boolean,
      isLoading: boolean,
      data: Product[] | undefined,
      error: Error | undefined,
    ) => {
      setSearch({
        isEmpty,
        isLoading,
        data,
        error,
      });
    },
    [],
  );

  return { searchBarState, onUpdateSearchBar };
};
