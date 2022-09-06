import { useCallback, useEffect, useMemo, useReducer } from 'react';

type CheckboxState = 'ALL' | 'PART' | 'NONE';

//region Reducer
type ActionType =
  | {
      type: 'CHECKED_ALL';
      payload: boolean;
    }
  | {
      type: 'UPDATE_DATA';
      payload: undefined | { id: string }[];
    }
  | {
      type: 'ADD_CHECK';
      payload: string;
    }
  | {
      type: 'REMOVE_CHECK';
      payload: string;
    };

const initialState = {
  data: undefined as undefined | { id: string }[],
  checkState: 'ALL' as CheckboxState,
  checkedAll: true,
  checkedList: [] as string[],
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const { type, payload } = action;

  if (type === 'CHECKED_ALL') {
    const { data } = state;
    if (!data) return state;

    const checked = payload;
    const prev = state.checkState;
    let checkState: 'ALL' | 'NONE' = 'ALL';

    if (checked) {
      if (prev === 'PART') {
        checkState = 'NONE';
      } else if (prev === 'NONE') {
        checkState = 'ALL';
      }
    } else {
      if (prev === 'ALL') {
        checkState = 'NONE';
      } else if (prev === 'PART') {
        checkState = 'NONE';
      }
    }

    const checkedAll = checkState === 'ALL';
    const checkedList = checkedAll ? data.map(({ id }) => id) : [];
    return {
      ...state,
      checkState,
      checkedAll,
      checkedList,
    };
  } else if (type === 'ADD_CHECK' || type === 'REMOVE_CHECK') {
    const { data } = state;
    const id = payload;

    if (!data || !data.find(({ id: dataId }) => dataId === id)) return state;
    const prevCheckList = state.checkedList;
    let checkedList: string[];

    if (type === 'ADD_CHECK') {
      checkedList = Array.from(new Set([...prevCheckList, id]));
    } else {
      checkedList = prevCheckList.filter((id_) => id_ !== id);
    }

    let { checkState } = state;
    if (data.length === checkedList.length) {
      checkState = 'ALL';
    } else if (data.length > checkedList.length) {
      checkState = 'PART';
    } else {
      checkState = 'NONE';
    }

    return {
      ...state,
      checkState,
      checkedAll: checkState === 'ALL',
      checkedList,
    };
  } else if (type === 'UPDATE_DATA') {
    const data = payload;
    let { checkedList } = state;

    if (!data) {
      checkedList = [];
    } else {
      let { checkState } = state;

      if (checkState === 'ALL') {
        checkedList = data.map(({ id }) => id);
      } else if (checkState === 'PART') {
      } else {
        checkedList = [];
      }
    }

    return {
      ...state,
      data,
      checkedList,
    };
  }

  return state;
};
//endregion

export const useCheckboxWithCheckAll = (data: { id: string }[] | undefined) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: 'UPDATE_DATA', payload: data });
  }, [data]);

  const { checkedList, checkedAll } = state;

  const onChangeCheckbox = useCallback(
    (id: string, checked: boolean) => {
      dispatch({ type: checked ? 'ADD_CHECK' : 'REMOVE_CHECK', payload: id });
    },
    [dispatch],
  );

  const onChangeCheckboxAll = useCallback(
    (checked: boolean) => {
      dispatch({ type: 'CHECKED_ALL', payload: checked });
    },
    [dispatch],
  );

  const isHasCheckList = useMemo(() => checkedList.length !== 0, [checkedList]);
  return {
    checkedList,
    checkedAll,
    onChangeCheckbox,
    onChangeCheckboxAll,
    isHasCheckList,
  };
};
