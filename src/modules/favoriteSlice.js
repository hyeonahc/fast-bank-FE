import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

export const getFav = createAsyncThunk('wishList', async () => {
  let token = localStorage.getItem('accessToken')
  const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/wishList`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return res.data
})

export const addFav = createAsyncThunk('wishList', async (payload) => {
  const { id, name, type } = payload
  let token = localStorage.getItem('accessToken')
  const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/wishList`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id,
      name,
      type,
    },
  })
  console.log(res.data)
  return res.data
})

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem('favorite')) || [],
  wishList: [],
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
  extraReducers: {
    [getFav.fulfilled](state, { payload }) {
      state.wishList = payload
    },
    [addFav.fulfilled](state, { payload }) {
      state.wishList = payload
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
