import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  favoriteList: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    favoriteHandler: (state, action) => {
      state.favoriteList.includes(action.payload)
        ? (state.favoriteList = state.favoriteList.filter(
            (element) => element !== action.payload,
          ))
        : (state.favoriteList = [...state.favoriteList, action.payload])
    },
  },
})

export function useFavorite() {
  const dispatch = useDispatch()
  const favorite = useSelector((state) => state.favorite.favoriteList)
  return { dispatch, favorite }
}

export const { favoriteHandler } = favoriteSlice.actions

export default favoriteSlice
