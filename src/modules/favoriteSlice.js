import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem('favorite')) || [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteList = [...state.favoriteList, action.payload]
      localStorage.setItem('favorite', JSON.stringify(state.favoriteList))
    },

    deleteFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (element) => element.id !== action.payload.id,
      )
      localStorage.setItem('favorite', JSON.stringify(state.favoriteList))
    },
  },
})

export function useFavorite() {
  const dispatch = useDispatch()
  const favorite = useSelector((state) => state.favorite.favoriteList)
  return { dispatch, favorite }
}

export const { addFavorite, deleteFavorite } = favoriteSlice.actions

export default favoriteSlice
